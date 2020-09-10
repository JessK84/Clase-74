
const traeUsuario = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/6")
    .then(res => {console.log(res.data)
            const userId = document.querySelector('#id');
            userId.value = res.data.id;
            const user = document.querySelector('#name');
            user.value = res.data.name;
            const userName = document.querySelector('#userName');
            userName.value = res.data.username;
            const userEmail = document.querySelector('#email');
            userEmail.value = res.data.email;
            const userAddress = document.querySelector('#address');
            userAddress.value = res.data.address.street + `, ` + res.data.address.suite;
            const userWeb = document.querySelector('#webSite');
            userWeb.value = res.data.website;
            const userPhone = document.querySelector('#phone');
            userPhone.value = res.data.phone;
            const userCompany = document.querySelector('#company');
            userCompany.value = res.data.company.name;
         
        })
   .catch(err => console.log(err));
}


const load = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', traeUsuario)
}