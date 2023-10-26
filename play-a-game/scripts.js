class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack(){

        let typeOfAttack = '';


        switch (this.type) {
            case "mage":
                typeOfAttack = "using magic"
                break;

            case "warrior":
                typeOfAttack = "using sword"
                break;

            case "monk":
                typeOfAttack = "using marcial arts"
                break;
            
            case "ninja":
                typeOfAttack = "using shuriken"
                break;

            default:
                typeOfAttack = "Unknown attack"
        }
        
        console.log(`The ${this.type} attacked ${typeOfAttack}`);
    }        
}


const hero = new Hero("Lucas Medina", 23, "mage")
hero.attack();