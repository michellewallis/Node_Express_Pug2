const web = {

    getwebHome: (req,res)=>{
        console.log("*******NUESTRA HOME*******");
        res.render('home', {name:"Empresa LegoBot"});
        // console.log(req.params);
    },

    
    getwebAbout: (req,res)=>{
        console.log("*******SOBRE NOSOTROS ABOUT************");
        res.render('about', {description:"Empresa dedicada a la robotica educativa"});
        
    },

    getwebMission: (req,res)=>{
        console.log("******AQUI SE MUESTRA NUESTRA GRAN MISION*********");
        res.render('mission',  {slogan:"Educamos jugando"});
        
        
    },

    getwebLocation: (req,res)=>{
        console.log("******AQUI  MUESTRA LOCACION *********");
        res.render('location',{direccion:"Calle Caracas"});
        
        
    },

    getwebContact: (req,res)=>{
        console.log("*******AQUI SE MUESTRA CONTACTO********");
        res.render('contact', {email:"empresaCaracas@gmail.com", tel: 644789658, street:"Calle Caracas"});
        
        
    }

}

module.exports = web;


