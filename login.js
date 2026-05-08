function login(){

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const usuariovalido = "Admin";
    const senhavalida = "Amarelo@1213";

    if (user === usuariovalido && pass ===senhavalida){
        localStorage.setItem('auth',true);
        window.location.href ="home.html"
    } else{
        document.getElementById('msgerror').style.display = 'block'
    }
}