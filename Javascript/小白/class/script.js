class Phone{
    constructor(number, year, is_waterproof)
    {
        this.number = number;
        this.year = year;
        this.is_waterproof = is_waterproof;
    }
    phone_age(){
        return 2022-this.year;
    }
}
var phone1 = new Phone("iPhone 7",2016,false);
var phone2 = new Phone("iPhone 8",2017,false);
var phone3 = new Phone("iPhone 11",2019,true);
document.writeln(phone1.number);
document.writeln(phone1.phone_age()+" years");
document.write("</br>");
document.writeln(phone2.number);
document.writeln(phone2.phone_age()+" years");
document.write("</br>");
document.writeln(phone3.number);
document.writeln(phone3.phone_age()+" years");
document.write("</br>");
