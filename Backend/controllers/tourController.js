import Tour from '../models/Tour.js'



//create new tour 
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {

        const savedTour = await newTour.save()
        res.status(200).json({ success: true, message: "succesfully created", data: savedTour })
        console.log(savedTour)
    } catch (err) {

        res.status(500).json({ success: false, message: "unable to save in database" });

    };
};

// update tour 

export const updateTour = async (req, res) => {
    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body

        }, { new: true })
        res.status(200).json({ success: true, message: "succesfully created", data: updatedTour })

    } catch (error) {
        res.status(500).json({ success: false, message: "failed to updated try again" });
    };
};

//delete 
export const deleteTour = async (req, res) => {
    const id = req.params.id

    try {

        const deltedTour = await Tour.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "succesfully  deleted", data: deltedTour })
    } catch (err) {

        res.status(500).json({ success: false, message: "failed try to delete again" });

    };
};

//fetch single
export const singalTour = async (req, res) => {
    const id = req.params.id
    try {
        const getsingalTour = await Tour.findById(id)
        res.status(200).json({ success: true, message: "succesfully found one ", data: getsingalTour })
    } catch (err) {
        res.status(500).json({ success: false, message: "failed try to  found one  again" });

    };
};


// fetch all data
export const allTour = async (req, res) => {

    const page = parseInt(req.query.page)
    console.log(page)

    try {
        const getallTour = await Tour.find({}).skip(page * 8).limit(8).populate("reviews")
        res.status(200).json({
            success: true, count: getallTour.length, message: "succesfully found all ", data: getallTour,

        })
    } catch (err) {
        res.status(500).json({ success: false, message: "failed try to  found all  again" });

    };
};



//search tour
export const searchTour = async (req, res) => {

    // const city = new RegExp(req.params.query.city, 'i')
    // const distance = parseInt(req.params.query.distance)
    // const maxGroupSize = parseInt(req.params.query.maxGroupSize)
    const testingg = (req.params.query);

    try {
        const searchedTour = await Tour.find({ testingg }).populate("reviews")
        res.status(200).json({
            success: true, message: "succesfully found all ", data: searchedTour,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "failed try to  found all  again" });

    };
};


export const getallTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount().populate("reviews")
        res.status(200).json({ success: true, data: tourCount })

    } catch (error) {
        res.status(500).json({ success: false, message: 'failed to fetch' });
    };
};