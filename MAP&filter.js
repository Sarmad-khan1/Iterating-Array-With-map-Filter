//Joining map with the filter In JavaScript to printing the text along with boolean (TRUE & FALSE)

<script>

const pro = [
    {
        id:1,
        text:'hello',
        profile:true
    },
    {
        id:2,
        text:'xyz',
        profile:false
    },
    {
        id:3,
        text:'anonymous',
        profile:true
    }
];

const proText = pro.filter(function(pro){
    return pro.profile === true;
});

console.log(proText);

//Now Joining MAP WITH THE FILTER IN JAVASCRIPT

const pro2 = [
    {
        id:1,
        text:'hello',
        profile:true
    },
    {
        id:2,
        text:'xyz',
        profile:false
    },
    {
        id:3,
        text:'anonymous',
        profile:true
    }
];

//This code will return only the text of the array in object whose value is false becasue i have applied a comparison opertor and now all code will operate under the condition when it is true it will execute respective array in the object as per user requirement in the code


const proText2 = pro2.filter(function(pro2){
    return pro2.profile === false;
}).map(function(pro2){
    return pro2.text;    
});

console.log(proText2);

    </script>