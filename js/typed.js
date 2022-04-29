
      const subscribe = document.getElementById('subscribe');

      var typed = new Typed('.typed', {
      strings: [
        "ProfitTrailer's Missing GUI.", 
        "Edit Settings in Real-Time.",
        "Wiki Definitions at a Glance.",
        "Never Touch Code Again.",
        "Copy &amp; Paste Settings.",
        "Save Templates Online.",
        "Download Files to Hard Drive."
      ],
        backDelay: 4000,
        typeSpeed: 30,
        backSpeed: 20,
        attr: null,
        showCursor : true,
        cursorChar : '|',
        autoInsertCss : true,
        contentType: 'html',
        loop: true
      });

      const featureEmail = document.querySelector(".feature-email");
      const input = document.querySelector('input');

      featureEmail.addEventListener("click", (event) => {
        input.focus();
      }, true);