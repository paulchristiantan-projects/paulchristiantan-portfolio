(function($){
    $.fn.inputFilter = function(inputFilter) {
      return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
        if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
      });
    };
}(jQuery));

function range(val, min, max){
    if((val < min) || (val > max))
        return null;
    else
        return val;
}

let month = 0;
let day = 0;
let year = 0;

$(function() {

    $("#month").focus();

    $("#month").inputFilter(function(value) {
        return /^\d{0,2}$/.test(range(value, 0, 12));
    });
    
    $("#day").inputFilter(function(value) {
        return /^\d{0,2}$/.test(range(value, 0, 31));
    });

    $("#month").keyup(function(){

        month = $("#month").val();

        if($("#month").val() == "")
            $("#birthstone, #birthflower, #astrologicalSign").html("&mdash;");
        
        switch(month){
            case "1":
            case "01":

                $("#birthstone").html("Garnet");
                $("#birthflower").html("Carnation");

                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 31));
                });

                $("#day").keyup(function(){
                    
                    day = $("#day").val();
                    
                    if(day <= 0 || day >= 32){
                        $("#astrologicalSign").html("&mdash;");
                    }else{
                        if(day >= 1 && day <= 20)
                            $("#astrologicalSign").html("Capricorn");
                        if(day >= 21 && day <= 31)
                            $("#astrologicalSign").html("Aquarius");
                    }
                });
            break;
            case "2":
            case "02":

                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 29));
                });

                $("#birthstone").html("Amethyst");
                $("#birthflower").html("Violet");

                $("#day").keyup(function(){
                        
                    day = $("#day").val();

                    let leap = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
                    
                    if(day >= 1 && day <= 19){
                        $("#astrologicalSign").html("Aquarius");
                    }
                    if(leap){
                        if(day >= 20 && day <= 29){
                            $("#astrologicalSign").html("Pisces");
                        }if(day <= 0 || day >= 30){
                            $("#astrologicalSign").html("&mdash;");
                        }
                    }
                    else{
                        if(day >= 20 && day <= 28){
                            $("#astrologicalSign").html("Pisces");
                        }if(day <= 0 || day > 29){
                            $("#astrologicalSign").html("&mdash;");
                        }
                    }
                });
            break;
            case "3":
            case "03":
                
                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 31));
                });
                
                $("#birthstone").html("Aquamarine");
                $("#birthflower").html("Jonquil");

                $("#day").keyup(function(){
                        
                    day = $("#day").val();

                    if(day <= 0 || day >= 32){
                        $("#astrologicalSign").html("&mdash;");
                    }else{
                        if(day >= 1 && day <= 20)
                            $("#astrologicalSign").html("Pisces");
                        if(day >= 21 && day <= 31)
                            $("#astrologicalSign").html("Aries");
                    }
                });
            break;
            case "4":
            case "04":

                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 30));
                });

                $("#birthstone").html("Diamond");
                $("#birthflower").html("Sweet Pea");

                $("#day").keyup(function(){
                            
                    day = $("#day").val();

                    if(day <= 0 || day >= 31){
                        $("#astrologicalSign").html("&mdash;");
                    }
                    else{
                        if(day >= 1 && day <= 19)
                            $("#astrologicalSign").html("Aries");
                        if(day >= 20 && day <= 30)
                            $("#astrologicalSign").html("Taurus");
                    }
                });
            break;
            case "5":
            case "05":

                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 31));
                });

                $("#birthstone").html("Emerald");
                $("#birthflower").html("Lily of the Valley");

                $("#day").keyup(function(){
                                
                    day = $("#day").val();

                    if(day <= 0 || day >= 32){
                        $("#astrologicalSign").html("&mdash;");
                    }else{
                        if(day >= 1 && day <= 20)
                            $("#astrologicalSign").html("Taurus");
                        if(day >= 21 && day <= 31)
                            $("#astrologicalSign").html("Gemini");
                    }
                });
            break;
            case "6":
            case "06":

                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 30));
                });
                
                $("#birthstone").html("Pearl");
                $("#birthflower").html("Rose");

                $("#day").keyup(function(){
                                    
                    day = $("#day").val();

                    if(day <= 0 || day >= 31){
                        $("#astrologicalSign").html("&mdash;");
                    }else{
                        if(day >= 1 && day <= 21)
                            $("#astrologicalSign").html("Gemini");
                        if(day >= 22 && day <= 30)
                            $("#astrologicalSign").html("Cancer");
                    }
                });
            break;
            case "7":
            case "07":

                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 31));
                });
                
                $("#birthstone").html("Ruby");
                $("#birthflower").html("Larkspur");

                $("#day").keyup(function(){
                                        
                    day = $("#day").val();

                    if(day <= 0 || day >= 32){
                        $("#astrologicalSign").html("&mdash;");
                    }else{
                        if(day >= 1 && day <= 21)
                            $("#astrologicalSign").html("Cancer");
                        if(day >= 22 && day <= 31)
                            $("#astrologicalSign").html("Leo");
                    }
                });
            break;
            case "8":
            case "08":

                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 31));
                });
                
                $("#birthstone").html("Peridot");
                $("#birthflower").html("Gladiola");

                $("#day").keyup(function(){
                                            
                    day = $("#day").val();

                    if(day <= 0 || day >= 32){
                        $("#astrologicalSign").html("&mdash;");
                    }else{
                        if(day >= 1 && day <= 21)
                            $("#astrologicalSign").html("Leo");
                        if(day >= 22 && day <= 31)
                            $("#astrologicalSign").html("Virgo");
                    }
                });
            break;
            case "9":
            case "09":

                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 30));
                });
                
                $("#birthstone").html("Sapphire");
                $("#birthflower").html("Aster");

                $("#day").keyup(function(){
                                                
                    day = $("#day").val();

                    if(day <= 0 || day >= 31){
                        $("#astrologicalSign").html("&mdash;");
                    }else{
                        if(day >= 1 && day <= 22)
                            $("#astrologicalSign").html("Virgo");
                        if(day >= 23 && day <= 30)
                            $("#astrologicalSign").html("Libra");
                    }
                });
            break;
            case "10":

                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 31));
                });
                
                $("#birthstone").html("Opal");
                $("#birthflower").html("Calendula");

                $("#day").keyup(function(){
                                                    
                    day = $("#day").val();

                    if(day <= 0 || day >= 32){
                        $("#astrologicalSign").html("&mdash;");
                    }else{
                        if(day >= 1 && day <= 22)
                            $("#astrologicalSign").html("Libra");
                        if(day >= 23 && day <= 31)
                            $("#astrologicalSign").html("Scorpio");
                    }
                });
            break;
            case "11":

                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 30));
                });

                $("#birthstone").html("Topaz");
                $("#birthflower").html("Chrysanthemum");

                $("#day").keyup(function(){
                                                    
                    day = $("#day").val();

                    if(day <= 0 || day >= 31){
                        $("#astrologicalSign").html("&mdash;");
                    }else{
                        if(day >= 1 && day <= 21)
                            $("#astrologicalSign").html("Scorpio");
                        if(day >= 22 && day <= 30)
                            $("#astrologicalSign").html("Sagitarrius");
                    }
                });
            break;
            case "12":

                $("#day").inputFilter(function(value) {
                    return /^\d{0,2}$/.test(range(value, 0, 31));
                });
                
                $("#birthstone").html("Turquoise");
                $("#birthflower").html("Narcissus");

                $("#day").keyup(function(){
                                                        
                    day = $("#day").val();

                    if(day <= 0 || day >= 32){ 
                        $("#astrologicalSign").html("&mdash;");
                    }else{
                        if(day >= 1 && day <= 21)
                            $("#astrologicalSign").html("Sagitarrius");
                        if(day >= 22 && day <= 31)
                            $("#astrologicalSign").html("Capricorn");
                    }
                });
            break;
            default:
                $("#birthstone, #birthflower, #astrologicalSign").html("&mdash;");
            break;
        }
    });

    $("#year").inputFilter(function(value) {
        return /^\d{0,4}$/.test(range(value, 0, 2099));
    });

    if($("#birthstone, #birthflower, #astrologicalSign").val() === "INVALID DATE")
        $("#chineseZodiacSign").html("INVALID DATE");
    else if($("#birthstone, #birthflower, #astrologicalSign").val() === "&mdash;")
        $("#chineseZodiacSign").html("&mdash;");

    $("#year").keyup(function(){

        year = $("#year").val();

        if($("#year").val() == "")
            $("#chineseZodiacSign").html("&mdash;");

        if((year.length === 4) && (year >= 1900)){
            
            let leap = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

            if((!leap) && ($("#day").val() == 29)){
                $("#day").val("28");
            }
            switch((year - 4) % 12) {
                case 0:
                    $("#chineseZodiacSign").html("Rat");
                break;
            
                case 1:
                    $("#chineseZodiacSign").html("Ox");
                break;
            
                case 2:
                    $("#chineseZodiacSign").html("Tiger");
                break;
            
                case 3:
                    $("#chineseZodiacSign").html("Rabbit");
                break;
            
                case 4:
                    $("#chineseZodiacSign").html("Dragon");
                break;
            
                case 5:
                    $("#chineseZodiacSign").html("Snake");
                break;
            
                case 6:
                    $("#chineseZodiacSign").html("Horse");
                break;
            
                case 7:
                    $("#chineseZodiacSign").html("Goat");
                break;
            
                case 8:
                    $("#chineseZodiacSign").html("Monkey");
                break;
            
                case 9:
                    $("#chineseZodiacSign").html("Rooster");
                break;
            
                case 10:
                    $("#chineseZodiacSign").html("Dog");
                break;
            
                case 11:
                    $("#chineseZodiacSign").html("Pig");
                break;
            }
        }else{
            $("#chineseZodiacSign").html("Out of Range");
        }
     })
});