window.alert("Hold up! Mind answearing some questions?");
        let name = window.prompt("Enter your prefered name:", "Guest",);
        let age = window.prompt("This game has some sensitive material, so we have to verify your age. How old are you? ");
        let age1 = 18;
        if (age >= age1) {
            alert("Hello, " + name + "!" + " Just to warn you, this game contains disturbing imagery, so if you are sensitive to it, we would recommend other games on our website. Other wise, fell free to try it out!");
        } else {
            alert("Hello, " + name + "!" + " We are sorry to inform you, but this game is age restricted due to disturbing imagery. Come back later, for know you are free to enjoy other games on our website.");
            window. close()
        }