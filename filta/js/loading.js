 let passBy = false;

        if(!passBy){

            setTimeout(() => {

                window.location = 'frontendworks.html';

                passBy = true;
                return;

            }, 5000);

        }else{

            alert('error');

        }
       
        