$(document).ready(function() {
     
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

     
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});

 
window.addEventListener('load', function() {
  const splash = document.getElementById('splash-screen');
  const mainContent = document.getElementById('main-content');
  
   
  setTimeout(function() {
    splash.classList.add('slide-out');
    
     
    setTimeout(function() {
      mainContent.classList.remove('d-none');
      splash.style.display = 'none';
    }, 500); 
  }, 1000);  
});


 const toggleButton = document.getElementById('toggleButton');
        const bankTable = document.getElementById('bankTable');
        let isVisible = false;
        
        // Table HTML content
        const tableHTML = `
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
            <thead>
                <tr style="background-color: #3498db; color: white;">
                    <th>Short Code</th>
                    <th>Name of Correspondent</th>
                    <th>Country/Currency</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DEUT/DETFXXX</td>
                    <td>DEUTSCHER BANK AG, Germany</td>
                    <td style="text-transform: uppercase; font-weight: bold;">EUROHR/GBP</td>
                </tr>
                <tr>
                    <td>DETTAGXXXX</td>
                    <td>DEUTSCHER BANK TRUST NY, USA</td>
                    <td style="text-transform: uppercase; font-weight: bold;">USDRUN</td>
                </tr>
                <tr>
                    <td>RZBAATWW</td>
                    <td>RAIFFEISEN BANK INTERNATIONAL, AUSTRIA</td>
                    <td style="text-transform: uppercase; font-weight: bold;">EUROHR/USD</td>
                </tr>
                <tr>
                    <td>LJABSZX</td>
                    <td>KOKA LILIB,JAKIKA IBAKA, SLOVENA</td>
                    <td style="text-transform: uppercase; font-weight: bold;">EUROHR/USD</td>
                </tr>
                <tr>
                    <td>VAPITHA</td>
                    <td>VAPIVE NEED BASKSAL TURNET</td>
                    <td style="text-transform: uppercase; font-weight: bold;">EURUUB</td>
                </tr>
                <tr>
                    <td>BKAUATWW</td>
                    <td>UNCREDIT BANK AUSTRIA, AUSTRIA</td>
                    <td style="text-transform: uppercase; font-weight: bold;">EUROHR</td>
                </tr>
                <tr>
                    <td>UASMATTR</td>
                    <td>INTERSA BAN RADO, ALBARIA</td>
                    <td style="text-transform: uppercase; font-weight: bold;">EUROHR/USD</td>
                </tr>
                <tr>
                    <td>UNALALTE</td>
                    <td>UNGUR A. ALBANA</td>
                    <td style="text-transform: uppercase; font-weight: bold;">EUROHR/USD</td>
                </tr>
                <tr>
                    <td>KRECREBS</td>
                    <td>KBC BANK, BELGIUM</td>
                    <td style="text-transform: uppercase; font-weight: bold;">EUROHR/GBP</td>
                </tr>
            </tbody>
        </table>
        `;
 
        toggleButton.addEventListener('click', function() {
            if (!isVisible) {
                bankTable.innerHTML = tableHTML;
                bankTable.style.display = 'block';
                toggleButton.textContent = 'Fsheh';
                isVisible = true;
            } else {
                bankTable.innerHTML = '';
                bankTable.style.display = 'none';
                toggleButton.textContent = 'Me shume...';
                isVisible = false;
            }
        });
