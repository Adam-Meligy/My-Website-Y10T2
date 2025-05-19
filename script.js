// starts a function. the yellow text is the name of the function, which is used in html to tell which element and when the function will take place (onkeyup in the input in index.html).
function searchFunction() {
    // this declares variables that hold reference to values and html elements, they will be defined later. While the code will still work without this line, it is still standard practice ot include it. without it, the variables are considered "global" and can apply to anything. by adding the "let" it means these variables are specific to this function, not global.
    let input, filter, ul, li, a, i, txtValue;
    // the variable "input" will equal the element with the id "searchinput" in html. this essentially just means that the input equals whatever is typed into the input section/field (the searchbar) in the website.
    input = document.getElementById("searchinput");
    // the "filter" variable will equal the value of the input variable, but in uppercase letters - the input is converted to uppercase. this is used more later, and when the other line of code is added it will help to ensure the search/filter is case-insensitive. what this means that, for example, when the letter "E" is typed into the search bar, all links that have either a lowercase "g" or uppercase "G" will appear in the results.
    filter = input.value.toUpperCase();
    // the variable "ul" will equal the html element with the id "Links". this is the <ul> element in html, and where the results appear in the search bar. it will retrieve the elements (<li> and <a>) found in the "links" <ul>.
    ul = document.getElementById("Links")
    // the variable "li" equals the elements in html with the tag name li found in the ul collection. these are the links in the list and results of the search bar
    li = ul.getElementsByTagName("li");

    // this is a "for" loop. its purpose is to repeatedly execute a chunk of code, and will execute every time a letter is typed into the searchbar. the code in the brackets defines how the loop will work.
    // the "i = 0" part is like the initialisation of the loop. it means the variable "i" has an initial value of 0, unless it has been declared already. this part only executes once, at the beginning of the loop. 
    // "i = li.length" is the condition part of the loop. "li.length" means the number of elements in that collection (the number of links), so it is saying: check if "i" is lower than the number of items in the "li" collection. This is run before every iteration of the loop. if the statement is true, it will run the code in the for loop. if it is false, it will run the code coming after the for loop.
    // the "i++" tracks how many times the loop has repeated. the code means: every time the loop is executed, add 1 to i. this will continue to run each loop until "i > li.length", in which case the code after the loop will execute.
    // so, "i" initially equals 0, and if "i" is less than the number of elements in the "li" collection, run the code, then add 1 to "i"
    for (i = 0; i < li.length; i++) {
        // li[i] refers to the variable "li", which equals multiple elements with the <li> tag in html. the [i] variable after it is like an index, and it refers to a specific <li> element in the html. at the beginning of the loop, i = 0, so li[0] will refer to the first element in the [li] collection, as the index starts at 0. as the number increases with each iteration, it will go down the list of li elements, referencing a different one.
        // .getElementsByTagName("a") means it will retrieve the html elements with the tag name <a> (the anchor links to the webpages). this means it will find all the <a> elements within the specific <li> referenced in "li[i]" (there is only 1 link in each <li> element).
        // [0] is the same as the [i]. it accesses the <a> element in the li list with the index of 0, aka the first one. since there is only 1 <a> element in each li, it means it will get that link.
        // so, a equals the first (and only) <a> element in a specific <li> element in the "li" collection, moving to the next <li> element each iteration / loop.
        a = li[i].getElementsByTagName("a")[0]
        // the variable "txtValue" equals the text content of "a". the text content of a is the text that shows up on the actual website, not the page link itself.
        txtValue = a.textContent
        // an if statement checks a value to be true or false. if it is true, it executes the following code.
        // txtValue.toUpperCase converts the value (the text content of the <a> in the specified <li>) of the variable "txtValue" to all Uppercase. This combined with turning the input value (variable name: filter) into uppercase improves the searching. because both values are now uppercase, all letters are the Uppercase when searching. this means that,for example, if "e" is typed, it will be converted to "E" and every link will be uppercase, and it will search for any "E"'s in the links. once it is found, it is displayed on the screen in its original value, either upper or lowercase. so if "e" was types into the search bar, it would return links that contain both uppercase and lowercase e's.
        // .indexOf(filter) takes the "txtValue" string and determines if a specific substring, filter, occurs within that string. this is the actual search function. Since "txtValue = a.textcontent", there are multiple <a> tags it will look through. it will look through each, one by one. if it finds a "txtValue" value that is contained in the "filter" value, then it will return its index position in the word("txtValue") itself. 0 is the beginning of the list, increases by 1 as you go down. for example, the filer value is e, and it looks through the txtValue "Elder Hu" first, it will return 0, as e is first found in the first letter in the word. it will then do the same until it has returned values for all of them. if the "filter" value is not found in the "txtValue" string, then the .indexOf function will return -1.
        // "> -1" will check if the value returned by the search function ("txtValue.toUpperCase().indexOf(filter)"). if this is true, the code will execute.
        // so, if the number returned for the "txtValue" is greater than -1 (the "filter" value was found in the "txtValue" string), then the following code will run. it will then repeat this for all the values for "txtValue" until a value has been returned and checked to be greater than -1. and if the statement is true for the values, then the code will apply to them. if it is false, the code wont apply (different code will though, using the "else" statement).
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            // sets the display (css code) of the "a" variables (the <a> links) to its default display value, and removes any inline display styles that have been set to that element through javascript code - this will show the links when you click on the search bar and when text is input into the searchbar, as they are hidden when you click off the searchbar.
            a.style.display = "";
            // the if statement runs the code if the statement is true. when adding "else", it will run a different line of code if the if statement is false.
        } else {
            // this will be how the searchbar hides the links that dent match what was typed in the search bar. if the statement is false, meaning the "filter" value wasn't found in the "txtValue" elements, then this code will run
            // sets the display of the "a" variables (the <a> links) to "none". setting an element's display to none means it doesn't show up on the actual website. this is how words that don't have what was typed in the searchbar are hidden.
            a.style.display = "none";
        }
    }
}