const Song = require('../models/song')

const createSong = async (req, res) => {
  try {
    const song = await new Song(req.body)
    await song.save()
    return res.status(201).json({
      song,
    })

  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
const getAllSongs = async (req,res)=>{
    try{
        const songs = await Song.find()
        return res.status(200).json({songs})

    } catch(error){
        return res.status(500).send(error.message)
    }
}

const getSongById= async(req,res)=> {
    try{
        const{id} = req.params;
        const song=await Song.findById(id)
        if(song){
            return res.status(200).json({song})
        }
        return res.status(404).send('Song not found');

    }catch(error){
        return res.status(500).send(error.message)
    }
}

const updateSong =(req,res)=>{
    try{
        const{id} = req.params
        Song.findByIdAndUpdate(id,req.body,{new:true},(err,song)=>{
            
            if(err!==null){
            console.log(err,"error")
        
            res.status(404).send(message)

            }else{
            console.log(song)
            res.json(song)
            }
        })



    }catch(error){
        return res.status(500).send(error.message)
    }
}



const deleteSong = async(req,res)=>{
try{
const{id} = req.params
const deleted = await Song.findByIdAndDelete(id)
if(deleted){
    return res.status(200).send("Song deleted")
}

throw new Error("Song not found")

}catch(error){
    return res.status(500).send(error.message)

}

}

module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong,
}




