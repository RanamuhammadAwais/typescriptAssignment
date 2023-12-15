/* 

This is 05D from panavers Github 
This is about Nested Objects

*/



type Author={
    firstName : string;
    lastName: string
};

const author:Author={
    firstName: "jahanzeb",
    lastName : " Tayab"
}

// Nested Objects


type Book = {
    author: Author
    name : "The Best Book "
};

const myBook : Book={

    author: {
        firstName: "zia ",
        lastName: "Khan"
    },
    name : "The Best Book ",

}

console.log(`Authoe name is ${myBook.author.firstName} ${myBook.author.lastName} and His book name is ${myBook.name}`)