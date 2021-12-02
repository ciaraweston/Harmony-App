const { ObjectId } = require("bson");
const { Router } = require("express");

module.exports = function (app, passport, db) {

  // normal routes ===============================================================

  // show the home page (will also have our login links)
  app.get('/', function (req, res) {
    res.render('index.ejs');
  });

  app.get('/index', function (req, res) {
    res.render('index.ejs')
  })
  app.get('/location', function (req, res) {
    res.render('location.ejs')
  })

  app.get('/harmonyfridgeone', function (req, res) {
    res.render('harmonyfridgeone.ejs')
  })

  app.get('/harmonyfridgetwo', function (req, res) {
    res.render('harmonyfridgetwo.ejs')
  })

  app.get('/harmonyfridgethree', function (req, res) {
    res.render('harmonyfridgethree.ejs')
  })

  // app.get('/fridge', function (req, res) {
  //   res.render('fridge.ejs')
  // })

  app.get('/wishlist', function (req, res) {
    res.render('wishlist.ejs')
  })

  app.get('/donate', function (req, res) {
    res.render('donate.ejs')
  })

  app.get('/faq', function (req, res) {
    res.render('faq.ejs')
  })

  app.get('/volunteer', function (req, res) {
    res.render('volunteer.ejs')
  })



  // MAIN SCREEN THAT USER WILL SEE SECTION============
  app.get('/profile', isLoggedIn, function (req, res) {
    db.collection('messages').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('profile.ejs', {
        user: req.user,
        messages: result
      })
    })
  });

  app.get('/donate', isLoggedIn, function (req, res) {
    db.collection('donation').find().toArray((err, result) => {
      if (err) return console.log(err)
      console.log(result)
      res.render('donate.ejs', {
        user: req.user,
        donation: result
      })
    })
  });

  // POST ============================================================ 


  // LOGOUT ==============================
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  // message board routes ===============================================================

  // =============================================================================
  // AUTHENTICATE (FIRST LOGIN) ==================================================
  // =============================================================================

  // locally --------------------------------
  // LOGIN ===============================
  // show the login form
  app.get('/login', function (req, res) {
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  // SIGNUP =================================
  // show the signup form
  app.get('/signup', function (req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  // 

  app.post('/sendDonation', isLoggedIn, (req, res) => {
    db.collection('donation').save({
      input: req.body.iName,
      quantity: req.body.qName,
      donator: req.body.donator
    }, (err, result) => {
      if (err) return console.log(err)
      console.log('saved to database')
      res.redirect('/donate')
      // this ejs file will haave to be the page where the post is individuall going to be shown. 
    })
  })


  //=============================================================================
  // UNLINK ACCOUNTS =============================================================
  // =============================================================================
  // used to unlink accounts. for social accounts, just remove the token
  // for local account, remove email and password
  // user account will stay active in case they want to reconnect in the future

  // local -----------------------------------
  app.get('/unlink/local', isLoggedIn, function (req, res) {
    var user = req.user;
    user.local.email = undefined;
    user.local.password = undefined;
    user.save(function (err) {
      res.redirect('/profile');
    });
  });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
}
