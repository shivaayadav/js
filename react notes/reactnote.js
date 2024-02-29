                    "REACT LIBRARY EACH AND EVERY NOTES"


                   {  "FIRST LECTURE (18 MINUTES) TIME STAMP(0-18 MINS) FROM WS CUBE TECH" }

// lets make note on react which will be useful for my daily revision 

            ""at first it is very important to note that react is not the javascript frame work as we hear from every one actually it is a library of javascript used for building effecent and componenets based website which makes the building process faster .""


// there are three types of websites 

//single page websites

1) singe page website 

            ""it refers to the webpage where if we click on any link like about us or contact us inn nav bar or anywhere else the page does not get refereshed but the url get change and the data get changed or different data get loaded on the same page . so this is what all about single pages websites and yes , react is used to make sigpe pages websites only .""
//benefits 
            ""this method is very fast and efficient if we see the working speed of a website in comparision to other type of websites.""



 //one page websites

2) one page website

             ""it refers to a type of website where all the necessary datas are located in a single pages like data of home section about us section and contact us section , similarly each section data are loaded in a single page only, as we click on the link of the pages ,like about us link it scroll downs the page and take us to that section where data of about us section is located. while doing so section name with # sign is added additionally in the previous url. so it works on scroll based method .""

 //multiple page websites

3) multiple page website
             it refers to a tpe of website where if we click on any link linke home or about us section the whole page get changed by reloading. it takes much time and it is out dated practise of making website.


          
          
             //  react library is commpletely based on components 


// what does this means?

        ""components are a part of a webpages like header , footer, sidebar, scrollbar, sections ,card, divs, etc this all are considered as a components in a websites "".
        
        
 //making components for a website

       "" so what we generally do here is we build components which are used in multiple pages in a webistes like we used the header section the footer section in almost every webpages so to save time and build the website very fastly what we do is""


we do not build manually by going in each and evry pages in the websites but else what we actually do is

//using the components in different page of the website where ever required

       "" we build these components once for multiples pages and we will use the made components where ever we will have to use it. now imagine how much time will be saved through this method that is why react is very fast process of building any webiste;""


//real dom and virtua dom 

// virtual dom 

// its like the blue print of the real document object model of website which is shown to us  


            As we make any kind of changes here the changes does not apply to the real document or html file what happens it the virtual dom compares the changes with the real domm and finally do the change on the real dom.

            so we can know that react works on a virtual dom method which make its changes faster and beacuse it make changes at the virtual dom first to give user fast experience it latern on keep the change in the real dom  

            this characterstic makes react fater and smoother than others.


//may be this topic i will cover latern in more deep let move on


                    "DEVELOPMENT OF REACT"
                    
    //react was developed by the facebook for removing the reloading problem and other issues there

    


//seting up package.json file to import and export files.

1) opening a new folder in VS code and starting with (""npm init -y"") in the terminial it will create the ("package.json") inside the json file we have to add {"type":"module"} script inside file where we will be able to import and export modules from one page to another page. but while creating react projects with comes built in so we do not have to do it manually.


// creating the setup for react project buildinng 

               {  "SECOND LECTURE (16 MINUTES) TIME STAMP(18-34 MINS) FROM WS CUBE TECH"  }



                                   "MODULE"

//what is a module?
              lets asume we have created a module module means just a function that can be used for a specfic work
 //creating the module
              so we have created a module inside a file named calculator.js where the module is to add two given numbers 

//how to use the moddule on another file
              now we have to use the same module inside our next file named as index.js then how can we do it.

  "Mechanism"

              to use that module we have to export that module fromm the calculator.js file and in which file we have to use that module we have to import there the same module thats it. now we will have full access of the module.

  => "Exporting a module"

     there are two ways we can export any module or a function 

       1) export named type
       2) export default type

       lets see what these are

       export named type

            =>Named export can be used to export multiple functions and modules from a single page without any issue`
            

             method 1
                                   
                                   // for example
                                   let sumData=(a,b)=>{
                                          return a+b;
                                   }
                                   
                                   export {sumData}      `

                                   additionally when importing  we also have to make changes on the import file  like while importing we have to import like this.

                               // for example
                                   import {sumData} from './calculator.js'
                               console.log(sumData(20,30))


             method 2
             //there is a easy method of exporting data's without that long process of using


                               export let sumData=(a,b)=>{
                                          return a+b;
                                   }

                                   we can simply write export before defining the function.






        export default type

            =>   so inside a single javascript page we can only use the default export method only once after we use the export default on nany module in a js page we then cannot export any module from the same page.
            if we have only one function in a single file then at that condition we use default export.

                                   // for example
                                   let sumData=(a,b)=>{
                                          return a+b;
                                   }
                                   
                                   export default sumData



       "conclusion"
=> the another difference is we have to  use curly braces {}    on the function name   that's it.

   =>  "Importing a module"
   now lets see how we will import the same fucntion inside the file called index.js
                                          // for example
                                   import sumData from './calculator.js'
                                   console.log(sumData(20,30))

                                   // termianll output was 50

                                   // we have imported the data and to proved that we have checked if it is working or not using the console.log

       "IMPORTING AND EXPORTING MULTIPLE FUNCTION FROM SINGL PAGES"

WHEN EVER WE WILL HAVE to export many function at once how will we do it?

suppose we have sumData, minData, MulData etc function and we need to export this all at once

//exporting 
                     let sumData=(a,b)=>{
                            return a+b;
                     }
                     let minData=(a,b)=>{
                            return a-b;
                     }
                     let mulData=(a,b)=>{
                            return a*b;
                     }
                     export {sumData,minData,mulData}   

//importing

                     import {sumData,minData,mulData} from './calculator.js'
                     console.log(sumData(20,30))
                     console.log(minData(20,30))
                     console.log(mulData(20,30))

// it doesnot matter we console them or not they are already imported now we can use them when ever we want them to

// so it is done now we can use multiple function at once whihc is being exported from another file and being import ito another file.


"Alias"=>petname

//when the function have a long name then at that time we can give a pet name for calling it easily for example

                     import {sumData,minData,mulData} from './calculator.js'
                     console.log(sumData(20,30))
                     console.log(minData(20,30))
                     console.log(mulData(20,30))
              
              look at the above code SumData function is a large name so while calling lets say i felt border now what can i do is 

                     import {sumData as sum,minData,mulData} from './calculator.js'
                     console.log(sum(20,30))
                     console.log(minData(20,30))
                     console.log(mulData(20,30))

              look i havev changed the sumData to sum which is very easy to call now the sumData name doesnot work so we have to also change the name sumData fromm the console as well because it doesnot work anymore. 



              "THIRD LECTURE (5 MINUTES) TIME STAMP(34-39 MINS) FROM WS CUBE TECH"


lets see the prerequirements to learn the React library so lets see
  
1) HTML => all the basic tags which are used in html 

                            completion =100%

       //  i don't have any issue with that i have masterd it and no need to worry about html here i know all the tags and how to use them

2) CSS => the basic used elements , tags, selectors, id, classes and others which are used in CSS 

                            completion =75%

              // i don't have any issue with that i have learned almost everything in it and no need to worry about CSS here i know all the tags and how to use them properly. 
              // the fundamental , and medium css is totally clear only advance css is not clear regarding that there is no issue because to learn react we only be using the basic css 

              

                              a) TAILWIND


                              completion =50%
                            // also i have learned the tailwind css the framework of css 


3) javascript(js) => lets see what topics are required here while learning the React :-
                     a) Variables
                                 => let 
                                  =>const
                                  =>var
                                  
                     b) Statements
                                 => Looping statements
                                  =>Conditional Statements
                               
                     c) ECMA Script functions
                                          => map
                                          =>filter
                                          =>reduce
                     d) Loop
                                 =>For in 
                                  =>For of
                                  =>For Each

                     e) Array destructuring

                     f) Object destructuring

                     g) Spread


                                
                     h) Arrow function
                                 =>how it is Calling
                                  =>how it works
                                  =>what is function with parameter
                     i) page
                                 => export
                                  =>import
                              
                     j) Asynchronous

                     k) Synchronous

                     l) Api
                                 => data display
                                 => API fetch

                     m) Callback function


     




                     "fourth LECTURE (18 MINUTES) TIME STAMP(39-57 MINS) FROM WS CUBE TECH"

              //setup process of the react inside our own system

              //setting the node js by downloading it into our system
       1) to run react inside out system we will be needed the node js run time environment which makes it easier for us to run the program immediately after writing into the terminal with the help of node js run time environment.
        after the installation of node it provides us with two things:-

        these are the methods of creating the project in our computer so

       NPM in node(node package manager)

              we use npm if we have to create a new projects on daily basis then we install the npm inside out system and use it to create projects when ever we will required

       NPX in node (node package executer)

                     if we do not have to work daily on a project and we will work on a single project for a long time then at this condition we use npx which will create project in any folder we want 
                     for that we have to work with terminal and some commands like 

                     1) going on the folder and opening it inside the cmd or simply going inside the cmd and opeing the folder where we want to create the project
                     2) npx create-react-app secndapp

                     here npx create-react-app is the command and the second app is the name of the project we want.

       3) to run the project we need to type (npm run start)
        in the terminal of vs code
        it will open a link of local host 3000 and the link can also be accessed from the mobile phone browser in both of the devices are connected with the same network. 

        so that's all for this lecture now lets see further more in the next lecture.




                     "fifth LECTURE (14 MINUTES) TIME STAMP(57- 1:11 MINS) FROM WS CUBE TECH"


                               
                     "Directory structure"



        1) package.json
                 => package.json file consist of all the necessary  installed packages withtheir dependencies inside it. suppose if we have installed the tailwind css package then the package will be containned inside the package.json file but the folder of tailwind css will be made inside the node_modules folder. Additionally package.json also consists some of the necessary commands and the scripts which are used here 

                 









