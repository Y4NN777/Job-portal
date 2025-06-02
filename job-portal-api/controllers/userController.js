const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Register User
// @route   POST /api/users/register
// @access  Public

exports.registerUser = async (req, res) => {
    try{
        const { name, email, password, role} = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        } 

        // Create an user 
        const user = await User.create({
            name,
            email,
            password,
            role: role || 'candidate'
        });

        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            data:{
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token
            }
        });

    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}


// @desc    Login User
// @route   POST /api/users/login
// @access  Public
exports.loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;

        // Check for user email
        const user = await User.findOne({ email }).select('+password');

        if (!user){
            return res.status(401).json({
                success: false,
                message: 'Invalid Credentials'
            });
        }

        // Check the password 
        const isMatch = await user.comparePassword(password);

        if (!isMatch){
            return res.status(401).json({
                success: false,
                message: 'Invalid Credentials'
            });
        }

        const token = generateToken(user._id);

        res.json({
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token
            }
        });

    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message  
        });
    }
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access Private
exports.getUserProfile = async (req, res) => {
    try{
        const user = await User.findById(req.user._id);

        res.json({
            success: true,
            data: user
        });
    }catch (error){
        res.status(400).json({
            success: false,
            message: error.message
          });
        }
    };


// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();

      res.json({
        success: true,
        data: {
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          role: updatedUser.role
        }
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};