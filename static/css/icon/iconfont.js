;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M830.032 681.008c-9.776-9.792-25.6-9.792-35.344 0-9.744 9.728-9.744 25.6 0.032 35.328 75.504 75.536 117.056 175.904 117.056 282.688 0 13.808 11.184 24.992 25.008 24.992s24.976-11.168 24.976-24.992C961.744 878.896 914.976 765.936 830.032 681.008zM512.016 0c-165.344 0-299.84 134.496-299.84 299.824 0 118.048 68.736 220.08 168.144 268.96-69.648 21.216-133.424 59.312-186.336 112.224-84.944 84.944-131.712 197.888-131.712 318.016C62.272 1012.832 73.456 1024 87.248 1024c13.808 0 25.008-11.168 25.008-24.992 0-106.784 41.568-207.152 117.088-282.688 74.144-74.192 172.368-115.504 277.056-116.96 1.888 0.032 3.728 0.288 5.632 0.288 165.328 0 299.824-134.512 299.824-299.84C811.84 134.48 677.344 0 512.016 0zM514.672 549.536c-0.896-0.096-1.776-0.272-2.688-0.272-1.792 0-3.584 0.112-5.36 0.128-135.248-2.912-244.448-113.632-244.448-249.568 0-137.76 112.096-249.856 249.856-249.856s249.888 112.096 249.888 249.856C761.904 436.688 651.216 548.096 514.672 549.536z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M927.230976 208.781312c-17.038336-3.968-34.05824 6.606848-38.064128 23.6288l-9.050112 38.733824L297.924608 271.143936l-16.809984-79.019008c-3.110912-14.637056-16.044032-25.095168-31.000576-25.095168l-145.46944 0c-17.509376 0-31.700992 14.19776-31.700992 31.675392 0 17.518592 14.191616 31.694848 31.700992 31.694848l119.829504 0 81.733632 383.986688c3.109888 14.592 16.006144 25.0624 30.98624 25.0624l496.751616 0c14.749696 0 27.503616-10.141696 30.862336-24.485888l86.066176-368.101376C954.840064 229.803008 944.284672 212.765696 927.230976 208.781312zM511.618048 430.086144l0-95.608832 153.371648 0 0 95.608832L511.618048 430.086144zM664.99072 468.099072l0 107.979776L511.618048 576.078848 511.618048 468.099072 664.99072 468.099072zM703.000576 334.476288l162.310144 0-22.347776 95.608832L703.000576 430.08512 703.000576 334.476288zM473.58976 334.476288l0 95.608832L331.756544 430.08512l-20.355072-95.608832L473.58976 334.476288zM339.83488 468.099072l133.75488 0 0 107.979776L362.829824 576.078848 339.83488 468.099072zM808.812544 576.077824 703.000576 576.077824 703.000576 468.099072l131.065856 0L808.812544 576.077824z"  ></path>' +
    '' +
    '<path d="M433.297408 716.197888c-39.09632 0-70.744064 31.670272-70.744064 70.744064s31.647744 70.721536 70.744064 70.721536c39.036928 0 70.703104-31.647744 70.703104-70.721536S472.334336 716.197888 433.297408 716.197888z"  ></path>' +
    '' +
    '<path d="M737.426432 716.197888c-39.098368 0-70.744064 31.670272-70.744064 70.744064s31.645696 70.721536 70.744064 70.721536c39.058432 0 70.720512-31.647744 70.720512-70.721536S776.484864 716.197888 737.426432 716.197888z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwucheman" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 44.372603c-259.393795 0-469.674009 210.280214-469.674009 469.674009s210.280214 469.674009 469.674009 469.674009 469.674009-210.280214 469.674009-469.674009S771.393795 44.372603 512 44.372603zM512 944.559717c-237.766219 0-430.513104-192.746886-430.513104-430.513104S274.233781 83.533508 512 83.533508s430.513104 192.746886 430.513104 430.513104S749.765195 944.559717 512 944.559717z"  ></path>' +
    '' +
    '<path d="M696.78454 785.328156c-20.074198 0-36.374442 16.249079-36.374442 36.283368s16.300244 36.263925 36.374442 36.263925c20.11513 0 36.400025-16.229636 36.400025-36.263925S716.89967 785.328156 696.78454 785.328156z"  ></path>' +
    '' +
    '<path d="M419.421488 785.328156c-20.094664 0-36.375465 16.249079-36.375465 36.283368s16.280802 36.263925 36.375465 36.263925c20.114107 0 36.378535-16.229636 36.378535-36.263925S439.535595 785.328156 419.421488 785.328156z"  ></path>' +
    '' +
    '<path d="M812.434513 706.681958 343.42463 706.681958l24.291243-85.058235-0.151449-0.124843c3.677762-4.944616 4.496407-10.952446 3.162016-16.492626-0.056282-0.171915 0.019443-0.335644-0.036839-0.515746l-66.974367-341.520257-0.075725 0.020466c-2.038426-8.638751-9.465582-14.403035-17.884322-15.106046-0.455371-0.12382-0.799202-0.419556-1.258667-0.475837l0-0.103354-70.39221-12.903891-0.016373 0.180102c-10.971889-1.715061-21.217231 5.779633-22.968108 16.733103-1.75497 10.923794 5.747911 21.169135 16.720823 22.892383l60.278875 11.0558 61.278645 321.730539-35.507702 107.954711 0.075725 0.055259c-0.400113 0.552585-0.475837 1.199315-0.835018 1.790786-0.76441 1.276063-1.411139 2.530636-1.867534 3.981684-0.419556 1.295506-0.63138 2.550079-0.782829 3.845585-0.092098 0.763386-0.456395 1.446955-0.456395 2.210341 0 0.511653 0.248663 0.951675 0.284479 1.446955 0.115634 1.446955 0.438998 2.818185 0.859577 4.189416 0.339738 1.107217 0.627287 2.189875 1.143033 3.237741 0.606821 1.258667 1.462305 2.342348 2.361791 3.465938 0.719384 0.935302 1.427512 1.790786 2.302439 2.573615 0.475837 0.400113 0.723477 0.931209 1.199315 1.311879 0.759293 0.571005 1.675152 0.723477 2.494821 1.143033 0.935302 0.535189 1.846044 1.031493 2.877537 1.37123 1.635243 0.571005 3.273557 0.87902 5.009084 1.030469 0.531096 0.036839 1.011027 0.303922 1.578961 0.303922l0 0.096191 502.299057 0 0-0.192382c11.104919 0 20.110013-8.989745 20.110013-20.053732C832.544527 715.671703 823.539432 706.681958 812.434513 706.681958z"  ></path>' +
    '' +
    '<path d="M845.312318 362.614691c0.268106-1.226944 0.763386-2.369977 0.763386-3.653203 0-1.107217-0.459464-2.067079-0.627287-3.113921-0.060375-0.404206-0.156566-0.7552-0.24764-1.143033-0.475837-2.190899-1.25969-4.181229-2.38328-6.028297-0.227174-0.356111-0.455371-0.687662-0.703011-1.039679-1.182942-1.686409-2.534729-3.121084-4.189416-4.360308-0.515746-0.419556-1.086751-0.771573-1.658779-1.143033-1.52268-0.915859-3.105734-1.61887-4.876054-2.12336-0.511653-0.163729-0.87595-0.49528-1.408069-0.6191-0.63138-0.1361-1.198292 0.035816-1.810229-0.039909-0.763386-0.092098-1.427512-0.448208-2.210341-0.448208L374.515742 338.90264l0 0.088004c-10.688433 0-19.411095 8.341992-20.052708 18.84316l-0.413416 0 0.350994 1.240247c0.002047 3.808746 1.089821 7.357572 2.945075 10.390651l72.106248 254.416434 0.680499 0c3.063779 7.173376 10.197246 12.20395 18.508539 12.20395l0 0.10847 288.924365 0 0-0.192382c0.803295 0 1.467421-0.350994 2.214435-0.459464 0.132006 0.048095 0.224104 0.144286 0.360204 0.163729 10.835789 2.382257 21.577434-4.441149 23.979134-15.265682l0.096191 0.016373 79.897701-253.148557c0.268106-0.579191 0.419556-1.178849 0.63138-1.790786l0.759293-2.198062-0.191358-0.035816C845.372693 363.054713 845.276503 362.846982 845.312318 362.614691z"  ></path>' +
    '' +
    '<path d="M448.895777 615.694687m-20.977777 0a20.5 20.5 0 1 0 41.955554 0 20.5 20.5 0 1 0-41.955554 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M509.881379 0C228.281379 0 0 228.281379 0 509.881379s228.281379 509.881379 509.881379 509.881379 509.881379-228.281379 509.881379-509.881379S791.481379 0 509.881379 0zM509.881379 978.97931c-259.001379 0-469.097931-210.096552-469.097931-469.097931S250.703448 40.783448 509.881379 40.783448s469.097931 210.096552 469.097931 469.097931S768.882759 978.97931 509.881379 978.97931z"  ></path>' +
    '' +
    '<path d="M806.488276 498.405517c1.412414-4.06069 1.942069-7.944828 1.942069-11.652414 0-11.29931-5.12-21.53931-14.124138-28.424828 0.176552 0.176552-3.531034-2.824828-3.531034-2.824828l-5.296552-4.06069-0.176552 0c-0.176552-0.176552-0.529655-0.353103-0.706207-0.529655 0 0-34.604138-26.482759-50.14069-38.488276l0-113.875862c0-19.773793-16.066207-35.84-35.84-35.84l-51.2 0c-19.773793 0-35.84 16.066207-35.84 35.84l0 19.773793-80.154483-61.44c-12.888276-9.710345-30.72-9.710345-43.431724 0 0 0-253.351724 194.206897-253.351724 194.206897l-9.533793 7.415172c-12.358621 9.357241-17.302069 25.423448-12.182069 40.077241 5.12 14.653793 18.891034 24.364138 34.251034 24.011034l37.782069-0.706207 0 213.274483c0 19.597241 16.066207 35.84 35.663448 35.84L429.02069 771.001379c19.773793 0 35.84-16.066207 35.84-35.84 0 0-0.176552-42.725517-0.176552-43.608276l0.176552 0 0-0.176552 0 0c0-64.794483 34.251034-65.147586 45.373793-65.147586 36.546207 0.353103 44.314483 34.957241 44.491034 64.264828 0 0.176552 0 0.529655 0 0.706207 0 0.176552 0 0.529655 0 0.529655l0 0 0 0c0 0 0.176552 2.471724 0.176552 3.001379l1.942069-1.588966-1.412414-1.412414 2.824828 0.176552 0.176552-0.176552 33.191724 2.295172 0.176552 0.176552 0.706207 0-0.529655 0 0.706207 0.706207c0-0.353103 0-0.706207 0-0.706207l0.353103 0c0 0.176552-0.176552 0.529655-0.353103 0.882759l0 0-37.605517-33.191724c0-0.882759 0 64.264828 0 64.264828l0 9.18069c0 19.597241 16.066207 35.663448 35.663448 35.663448l108.226207 0c19.597241 0 35.663448-16.066207 35.663448-35.84L734.631724 521.886897c9.357241 0.176552 37.782069 0.706207 37.782069 0.706207C787.773793 522.769655 801.544828 513.05931 806.488276 498.405517zM426.902069 692.612414 426.902069 692.612414 426.902069 692.612414 426.902069 692.612414zM592.684138 694.201379 592.684138 694.201379 592.684138 694.201379 592.684138 694.201379zM593.037241 691.729655l0.176552-18.537931c0-0.176552-0.706207-0.353103-1.765517-0.529655-6.17931-53.142069-36.016552-84.038621-81.037241-84.568276-46.962759 0.529655-76.8 31.602759-82.449655 83.862069l-1.235862 19.597241c0 2.295172 0.176552 4.237241 0.529655 6.17931l-0.353103 28.424828c0 0 0 4.06069 0 6.708966l-103.635862 0 0-211.862069c0.882759 0 1.588966-0.176552 1.588966-0.176552l-1.588966-9.18069 0-9.004138 0-19.42069c0 0-1.05931 0-2.471724 0l0 0-0.706207 0c-5.473103 0.176552-16.242759 0.353103-16.242759 0.353103l-16.242759 0.353103c0 0-21.715862 0.353103-33.544828 0.529655 2.118621-1.588966 3.884138-3.001379 3.884138-3.001379l251.93931-192.971034c12.182069 9.357241 109.462069 83.862069 109.462069 83.862069l30.543448 23.481379c-0.176552-0.176552-0.176552-38.664828-0.176552-38.664828l0-55.966897 46.609655 0 0 120.937931 0 9.533793 7.591724 5.649655c0 0 57.555862 44.137931 57.555862 44.137931 1.765517 1.235862 3.001379 2.295172 4.237241 3.177931l-33.721379-0.529655c0 0-16.242759-0.353103-16.242759-0.353103l-19.597241-0.353103c0-0.176552 0.176552 19.42069 0.176552 19.42069l0 7.238621c0-0.353103 0 200.562759 0 222.984828l-103.635862 0c0-2.648276 0-6.885517 0-6.885517 0 0 0-22.422069 0-22.422069C592.86069 703.028966 593.037241 694.024828 593.037241 691.729655z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-geren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M586.945923 513.581008c55.067176-27.962865 92.91211-85.125773 92.91211-150.998039 0-93.338828-75.937506-169.276335-169.277358-169.276335s-169.275311 75.937506-169.275311 169.276335c0 65.872267 37.844933 123.034151 92.911086 150.998039-95.652524 32.016181-164.778904 122.45496-164.778904 228.743728 0 11.31572 9.17394 20.491707 20.491707 20.491707s20.491707-9.174963 20.491707-20.491707c0-110.36869 89.791026-200.160739 200.160739-200.160739S710.741413 631.956046 710.741413 742.324736c0 11.31572 9.17394 20.491707 20.491707 20.491707s20.491707-9.174963 20.491707-20.491707C751.723803 636.035968 682.598446 545.598212 586.945923 513.581008zM382.287753 362.582969c0-70.742181 57.552787-128.293945 128.292921-128.293945 70.742181 0 128.293945 57.552787 128.293945 128.293945 0 70.741157-57.552787 128.292921-128.293945 128.292921C439.84054 490.876913 382.287753 433.324126 382.287753 362.582969z"  ></path>' +
    '' +
    '<path d="M827.871087 196.127889C743.498468 111.757317 631.320573 65.290005 512 65.290005S280.500509 111.756293 196.128913 196.127889C111.756293 280.501532 65.291029 392.678404 65.291029 511.998977s46.465265 231.499491 130.837884 315.872111 196.550515 130.837884 315.871087 130.837884 231.498468-46.465265 315.871087-130.837884S958.708971 631.319549 958.708971 511.998977 912.243707 280.500509 827.871087 196.127889zM512 917.726581c-223.718271 0-405.726581-182.007287-405.726581-405.727605 0-223.718271 182.00831-405.726581 405.726581-405.726581s405.726581 182.007287 405.726581 405.726581C917.726581 735.719294 735.718271 917.726581 512 917.726581z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhuye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M735.85904 643.649103c-33.56233 0-65.380949-12.791302-89.594372-36.016213-24.137698-23.15328-38.244969-54.267866-39.723644-87.612232-0.25071-5.646592 4.122892-10.426446 9.769485-10.677156 5.667058-0.257873 10.425423 4.123916 10.677156 9.769485 2.587936 58.356989 50.411032 104.070032 108.872399 104.070032s106.283439-45.713043 108.872399-104.070032c0.25071-5.647616 5.053076-10.025311 10.677156-9.769485 5.646592 0.25071 10.020194 5.030563 9.769485 10.677156-1.478675 33.344366-15.586969 64.458952-39.724667 87.612232C801.239989 630.857801 769.421369 643.649103 735.85904 643.649103L735.85904 643.649103z"  ></path>' +
    '' +
    '<path d="M497.669649 643.649103c-33.56233 0-65.380949-12.791302-89.593349-36.016213-24.137698-23.15328-38.244969-54.267866-39.723644-87.612232-0.25071-5.646592 4.123916-10.426446 9.769485-10.677156 5.632266-0.268106 10.425423 4.122892 10.676132 9.769485 2.587936 58.356989 50.410009 104.070032 108.871375 104.070032 58.460343 0 106.283439-45.713043 108.871375-104.070032 0.249686-5.647616 5.04182-10.025311 10.677156-9.769485 5.646592 0.25071 10.020194 5.030563 9.769485 10.677156-1.478675 33.344366-15.585946 64.458952-39.723644 87.612232C563.049574 630.857801 531.230955 643.649103 497.669649 643.649103L497.669649 643.649103z"  ></path>' +
    '' +
    '<path d="M259.480257 643.649103c-33.56233 0-65.380949-12.791302-89.593349-36.016213-24.137698-23.15328-38.244969-54.267866-39.723644-87.612232-0.25071-5.646592 4.123916-10.426446 9.769485-10.677156 5.628173-0.268106 10.425423 4.122892 10.676132 9.769485 2.587936 58.356989 50.410009 104.070032 108.871375 104.070032s106.283439-45.713043 108.871375-104.070032c0.25071-5.646592 5.042843-10.036567 10.676132-9.769485 5.646592 0.25071 10.020194 5.030563 9.769485 10.677156-1.478675 33.344366-15.585946 64.458952-39.723644 87.612232C324.861206 630.857801 293.042587 643.649103 259.480257 643.649103L259.480257 643.649103z"  ></path>' +
    '' +
    '<path d="M865.186265 520.278531l-20.466083 0L844.720182 278.990574c0-26.347012-21.434129-47.781141-47.781141-47.781141L198.400256 231.209434c-26.347012 0-47.781141 21.434129-47.781141 47.781141L150.619115 520.278531l-20.466083 0L130.153032 278.990574c0-37.630987 30.615214-68.247224 68.247224-68.247224L796.939041 210.743351c37.630987 0 68.247224 30.615214 68.247224 68.247224L865.186265 520.278531 865.186265 520.278531z"  ></path>' +
    '' +
    '<path d="M821.018411 940.834025 174.321909 940.834025 174.321909 605.719311 194.787992 605.719311 194.787992 920.367942 800.552328 920.367942 800.552328 605.719311 821.018411 605.719311 821.018411 940.834025Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)