const db = require("../db")
const Album = require("../models/album")
const Song= require("../models/song")


db.on("error", console.error.bind(console,"MongoDB connection error:"))

const main = async() =>{

    const album1 = await new Album({ name: 'Demon Days', year_of_release:'2005' , genre:'Alternative rockhip hoptrip hoppopart rock' , Label:'Parlophone . Virgin', image:'https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG' })
    album1.save()

    const album2 = await new Album({ name: 'Gorillaz', year_of_release:'2001' , genre:'Alternative rock lo-fi dub' , Label:'Parlophone . Virgin', image:'https://en.wikipedia.org/wiki/Gorillaz_(album)#/media/File:GorillazAlbum.jpg' })
    album2.save()

    const album3 = await new Album({ name: 'Plastic Beach', year_of_release:'2010' , genre:'Pop electronic hiphop funk' , Label:'Parlophone', image:'https://upload.wikimedia.org/wikipedia/en/d/d1/Plasticbeach452.jpg' })
    album3.save()

    const album4 = await new Album({ name: 'Humanz', year_of_release:'2017' , genre:'Hip hop dance art' , Label:'Parlophone Warner Bros', image:'https://en.wikipedia.org/wiki/Humanz#/media/File:HumanzGorillaz.png' })
    album4.save()

    const album5 = await new Album({ name: 'The Fall', year_of_release:'2010' , genre:'Electronic triphop lo-fi ' , Label:'Parlophone . Virgin', image:'https://en.wikipedia.org/wiki/The_Fall_(Gorillaz_album)#/media/File:The_Fall_(Gorillaz_album)_cover.jpg' })
    album5.save()



    

    const songs = [
        { title: 'Last Living Souls', writer: 'Albarn , Hewlett', length: '3min 10sec', artist:'Gorillaz', album: album1._id },
        { title: 'White Light', writer: 'Albarn , Hewlett', length: '2min 8sec', artist:'Gorillaz', album: album1._id },
        { title: 'New Genious', writer: 'Damon AlbarnOdetta Gordon', length: '4min', artist:'Gorillaz', album: album2._id },
        { title: 'White Flag', writer: 'Bashy ,Kano', length: '3min 43sec', artist:'Gorillaz', album: album3._id },
        { title: 'Empire Ants', writer: 'Nagano', length: '4min 43sec', artist:'Gorillaz', album: album3._id },
        { title: 'Charger', writer: 'Jones', length: '3min 34sec', artist:'Gorillaz', album: album4._id },
        { title: 'Saturnz Barz', writer: 'Andrae Sutherland', length: '3min 1sec', artist:'Gorillaz', album: album4._id },
        { title: 'Revolving Doors', writer: 'Damon Albarn', length: '3min 27sec', artist:'Gorillaz', album: album5._id },
        
        
        
    ]
await Song.insertMany(songs)
console.log("created songs!")


}


const run = async () => {
    await main()
    db.close()
} 

run()