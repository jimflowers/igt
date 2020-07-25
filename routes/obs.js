const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Unit = require('../models/Observations');


//Get unit list
router.get('/units',(req,res) =>
       Unit.findAll()
            .then(units => {
                const context = {
                    contextUnits: units.map(unit => {
                        return {
                            ID: unit.ID,
                            Title_Chapter: unit.Title_Chapter.trim(),
                            OCGA: unit.OCGA.trim(),
                            Observation: unit.Observation,
                            Doc_ID: unit.Doc_ID,
                            Obs_No: unit.Obs_No,
                            Startline: unit.Startline,
                            Endline: unit.Endline
                        }
                    })
                }
                res.render('units', {
                    units:context.contextUnits
                });
                })
            .catch(err => console.log(err)));
    // Unit.findByPk(15)//ByPk - primary key -- grabbing record #6 here
    // Unit.findOne ()
//     return Unit.findAll ({raw: true})
//         .then console.log(Unit.Observation),
//             var myUnit = Unit.Observation,
//             var myId = Unit.ID,
//             // rendering the view of observations thru a view i call units (using same name for var, obj, view is confusing) *\\
//             console.log("Obs #:", JSON.stringify(MyId)))
//
//         // res.render('units', {
//         //     units
//         // }))
//
//         // units on the next line is the object from .then line
//         //   units })
//         //)
//         // console.log(units.get('Observation'));
//         // res.send(200);
//         //})
//         .catch (err => console.log(err));
// });

    // router.get('/', (req,res) =>
    // Unit.findAll()
    //     .then( Unit => {
    //         console.log(unit);
    //         res.sendStatus(200);
    //     })
    //     // .then(units => res.render('units', {
    //     //     units
    //     // }))
    //     .catch(err => console.log(err)));

/* Display a Unit of Observation */
//Add some data

router.get('/add', (req,res) => res.render('add'));

// Exit the program
router.get('/exit', (req,res) => res.render('exit'));
    // process.kill(process.pid, 'SIGTERM')

    // .catch(err => console.log(err));
    // .catch(err=>console.log(err)));
    // process.kill(process.pid, 'Sigterm'));

// add obs form
//     router.post('/add', (req, res) => {
//     let {units} = req.body;
//     let errors = [];
//
//     // validate fields
//
//     //check for errors
//
//
//     // Insert into Table
//     Unit.create({
//         Title_Chapter,
//         OCGA,
//         Observation,
//         Doc_ID,
//         Obs_No,
//         Start,
//         End
//     })
//         .then(unit => res.redirect('/obs'))
//         .catch(err => console.log(err));
// });

    // search for units
//     router.get('/search', (req, res) => {
//         let { term } = req.query;
//
//         // Make lowercase
//         term = term.toLowerCase();
//
//         Gig.findAll({ where: { technologies: { [Op.like]: '%' + term + '%' } } })
//             .then(gigs => res.render('gigs', { gigs }))
//             .catch(err => console.log(err));
// })




module.exports=router;
