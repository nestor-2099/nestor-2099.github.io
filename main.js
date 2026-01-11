document.addEventListener("DOMContentLoaded", () => {
  (() => {
    let currentLang = "ES";

    /**
     * Get parents of specific element
     * @public
     * @param {Element} elem  the element to simulate a click on
     * @param {Selector} selector  parent type to find
     */
    const parents = (el, selector) => {
      const parents = [];
      while ((el = el.parentNode) && el !== document) {
        if (!selector || el.matches(selector)) parents.push(el);
      }
      return parents;
    }


    /**
     * Show mobile menu controller
     * @public
     */
    const mobileMenuController = () => {
      const bodyElem = document.querySelector("body"),
            menuBtns = document.querySelectorAll(".menu-btn"),
            uiSection = document.querySelector(".ui-section"),
            menuLayer = document.querySelectorAll(".menu-layer");
            
      
      if (uiSection.classList.contains('bg-black/50')) {
        uiSection.classList.remove('bg-black/50')
      } else {
        uiSection.classList.add('bg-black/50')
      }

      if(menuBtns.length > 0) {
        menuBtns.forEach(function(menuBtn) {

          menuBtn.addEventListener('click', () => {
            
            menuBtns.forEach(function(buttonElem) {
              buttonElem.classList.toggle('hidden');
            })

            if (bodyElem.classList.contains('no-scroll')) {
              bodyElem.classList.remove('no-scroll')
            } else {
              bodyElem.classList.add('no-scroll')
            }

            if (uiSection.classList.contains('z-40')) {
              uiSection.classList.remove('z-40')
            } else {
              uiSection.classList.add('z-40')
            }

            if (uiSection.classList.contains('bg-black/50')) {
              uiSection.classList.remove('bg-black/50')
            } else {
              uiSection.classList.add('bg-black/50')
            }

            if (uiSection.classList.contains('pointer-events-none')) {
              uiSection.classList.remove('pointer-events-none')
            } else {
              uiSection.classList.add('pointer-events-none')
            }

            if (uiSection.classList.contains('pointer-events-auto')) {
              uiSection.classList.remove('pointer-events-auto')
            } else {
              uiSection.classList.add('pointer-events-auto')
            }

            menuLayer.forEach(function(menuLayerElem) {
              if (menuLayerElem.classList.contains('hidden')) {
                menuLayerElem.classList.remove('hidden')
              } else {
                menuLayerElem.classList.add('hidden')
              }
            })
            
          });
        });
      }
    }

    /**
     * Scroll on page with a specific class
     * @public
     */
    const scrollController = () => {
      const btnScroll = document.querySelectorAll(".btn-scroll"),
            closeBtn = document.querySelector(".close-menu");

      if(btnScroll) {
        btnScroll.forEach(function(elem, index) {
          elem.addEventListener('click', (event) => {
            event.preventDefault();
            let hash = event.currentTarget.getAttribute('href').replace('#', '');
            // console.log(hash);
            
            const id = hash;
            const yOffset = -30; 
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({top: y, behavior: 'smooth'});

            if(elem.classList.contains('menu-card')) {
              closeBtn.click();
            }

          });
        });
      }
    }

    
    /**
     * Switch language base on 2 external files
     * @public
     */
    const languageSwitchController = () => {
      const langBtn = document.querySelector('#lang-select');

      let cardGeneralElem;

      langBtn.addEventListener('click', () => {
        cardGeneralElem = document.querySelectorAll('.card-general-elem');
        cardGeneralElem.forEach(function(elem) {
          elem.remove();
        })

        langSet();
        projectCardsController();
        showMoreSet();
        modalController();
        
      });
    }

    const showMoreSet = () => {
      const btnShowMoreStep = document.querySelectorAll(".btn-show-more");

      if(btnShowMoreStep) {
        btnShowMoreStep.forEach(function(elem, index) {
          let classElems = elem.getAttribute('data-class'),
              totalElems = document.querySelectorAll('.'+classElems).length,
              itemsStep = elem.getAttribute('data-show-elems');
          if(totalElems > itemsStep) {
            elem.classList.remove('hidden');
          }
        });
      }
    }

    /**
     * Language set
     * @public
     */
    const langSet = () => {
      let langElem = "";

      const langBtn = document.querySelector('#lang-select');

      if(currentLang == "EN") {
        currentLang = "ES";
        
        for (let key in websiteES) {
          if (websiteES.hasOwnProperty(key)) {
            
            for (let key2 in websiteES[key]) {
              langElem = document.querySelectorAll('.'+key+'-'+key2);
              
              langElem.forEach(function(langCoincidence) {
                langCoincidence.innerHTML = websiteES[key][key2];
                // console.log(websiteES[key][key2])
              });
            }
          }
        }

        langBtn.querySelector('.lang-es').classList.add('active');
        langBtn.querySelector('.lang-en').classList.remove('active');

      } else if (currentLang == "ES") {
        currentLang = "EN";
        
        for (let key in websiteEN) {
          if (websiteEN.hasOwnProperty(key)) {
            
            for (let key2 in websiteEN[key]) {
              langElem = document.querySelectorAll('.'+key+'-'+key2);
              langElem.forEach(function(langCoincidence) {
                langCoincidence.innerHTML = websiteEN[key][key2];
                // console.log(websiteEN[key][key2])
              });
            }
          }
        }

        langBtn.querySelector('.lang-en').classList.add('active');
        langBtn.querySelector('.lang-es').classList.remove('active');
      }
    }

    /**
     * Language set at start of the browsing
     * @public
     */
    const langSetStart = () => {
      let langElem = "";

      const langBtn = document.querySelector('#lang-select');

      if(currentLang == "ES") {
        for (let key in websiteES) {
          if (websiteES.hasOwnProperty(key)) {
            
            for (let key2 in websiteES[key]) {
              langElem = document.querySelectorAll('.'+key+'-'+key2);
              
              langElem.forEach(function(langCoincidence) {
                langCoincidence.innerHTML = websiteES[key][key2];
                // console.log(websiteES[key][key2])
              });
            }
          }
        }

        langBtn.querySelector('.lang-es').classList.add('active');
        langBtn.querySelector('.lang-en').classList.remove('active');

      } else if (currentLang == "EN") {
        for (let key in websiteEN) {
          if (websiteEN.hasOwnProperty(key)) {
            
            for (let key2 in websiteEN[key]) {
              langElem = document.querySelectorAll('.'+key+'-'+key2);
              langElem.forEach(function(langCoincidence) {
                langCoincidence.innerHTML = websiteEN[key][key2];
                // console.log(websiteES[key][key2])
              });
            }
          }
        }

        langBtn.querySelector('.lang-en').classList.add('active');
        langBtn.querySelector('.lang-es').classList.remove('active');
      }
      scrollController();
    }

    /**
     * Track pointer to draw background
     * @public
     */
    const backgroundFollowController = () => {
      const bg = document.getElementById("bg-aura");

      document.body.onpointermove = event => {
        const { clientX, clientY } = event;

        bg.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, {duration: 3000, fill: 'forwards'})
      }
    }

    
    /**
     * Fill website cards based on language
     * @public
     */
    const projectCardsController = () => {
      const cardContainers = document.querySelectorAll(".card-project-container");
      

      cardContainers.forEach(function(cardContainer) {
        const cardType = cardContainer.getAttribute('data-type'),
              currentCardLimit = 6;

        let cardElem,
            currentCard = 1;
        // console.log(cardType)
        switch(cardType) {
          case 'experience':
            cardElem = cardContainer.querySelector(".card-experience-elem");
            if(currentLang == "ES") {
              if(experienceArrayES) {
                for (let key in experienceArrayES) {
                  
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');

                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }
    
                  clone.setAttribute('data-project', key);
    
                  clone.querySelector('h3.card-experience-name').textContent = experienceArrayES[key].name;
                  clone.querySelector('i').classList.add(experienceArrayES[key].icon);

                  experienceArrayES[key].bullets.forEach(function(bullet) {
                    // console.log(bullet)
                    clone.querySelector('.card-list').insertAdjacentHTML('beforeend', '<li><p>'+bullet+'</p></li>');
                  })
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            } else if(currentLang == "EN") {
              if(experienceArrayEN) {
                for (let key in experienceArrayEN) {
                  // console.log(experienceArrayEN)
                  // console.log("=======")
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');

                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }
    
                  clone.setAttribute('data-project', key);
    
                  clone.querySelector('h3.card-experience-name').textContent = experienceArrayEN[key].name;
                  clone.querySelector('i').classList.add(experienceArrayEN[key].icon);

                  experienceArrayEN[key].bullets.forEach(function(bullet) {
                    // console.log(bullet)
                    clone.querySelector('.card-list').insertAdjacentHTML('beforeend', '<li><p>'+bullet+'</p></li>');
                  })
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            }
            break;
          case 'portfolio':
            cardElem = cardContainer.querySelector(".card-portfolio-elem");
            if(currentLang == "ES") {
              if(projectArrayES) {
                for (let key in projectArrayES) {
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');

                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }
    
                  clone.setAttribute('data-project', key);

                  // console.log(projectArrayES[key].url)
    
                  clone.querySelector('.card-project-img').setAttribute('src', projectArrayES[key].thumb);
                  clone.querySelector('.card-project-name h3').textContent = projectArrayES[key].name;
                  if(projectArrayES[key].url != "") {
                    clone.querySelector('.card-project-link').setAttribute('href', projectArrayES[key].url);

                    clone.querySelector('.card-project-link').setAttribute('aria-label', projectArrayES[key].name);
                  } else {
                    clone.querySelector('.card-project-link').classList.add('hidden');

                    clone.querySelector('.card-project-link').setAttribute('aria-label', projectArrayES[key].name);
                  }
                  clone.querySelector('.card-project-type').textContent = projectArrayES[key].type;
                  clone.querySelector('.card-project-date').textContent = projectArrayES[key].date;
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            } else if(currentLang == "EN") {
              if(projectArrayEN) {
                for (let key in projectArrayEN) {
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');
    
                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }

                  clone.setAttribute('data-project', key);
    
                  clone.querySelector('.card-project-img').setAttribute('src', projectArrayEN[key].thumb);
                  clone.querySelector('.card-project-name h3').textContent = projectArrayEN[key].name;
                  if(projectArrayEN[key].url != "") {
                    clone.querySelector('.card-project-link').setAttribute('href', projectArrayEN[key].url);

                    clone.querySelector('.card-project-link').setAttribute('aria-label', projectArrayEN[key].name);
                  } else {
                    clone.querySelector('.card-project-link').classList.add('hidden');

                    clone.querySelector('.card-project-link').setAttribute('aria-label', projectArrayEN[key].name);
                  }
                  clone.querySelector('.card-project-type').textContent = projectArrayEN[key].type;
                  clone.querySelector('.card-project-date').textContent = projectArrayEN[key].date;
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            }
            break;
          case 'games':
            cardElem = cardContainer.querySelector(".card-games-elem");
            if(currentLang == "ES") {
              if(gamesArrayES) {
                for (let key in gamesArrayES) {
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');
    
                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }

                  clone.setAttribute('data-project', key);
    
                  clone.querySelector('.card-project-img').setAttribute('src', gamesArrayES[key].thumb);
                  clone.querySelector('.card-project-name h3').textContent = gamesArrayES[key].name;
                  clone.querySelector('.card-project-type').textContent = gamesArrayES[key].type;
                  clone.querySelector('.card-project-description').innerHTML = gamesArrayES[key].description;
                  clone.querySelector('.card-platforms').textContent = gamesArrayES[key].platforms;
                  clone.querySelector('.card-project-date').textContent = gamesArrayES[key].date;
                  if(gamesArrayES[key].url != "") {
                    clone.querySelector('.card-project-link').setAttribute('href', gamesArrayES[key].url);

                    clone.querySelector('.card-project-link').setAttribute('aria-label', gamesArrayES[key].name);
                  }
                  if(gamesArrayES[key].url != "") {
                    clone.querySelector('.card-project-name').setAttribute('href', gamesArrayES[key].url);

                    clone.querySelector('.card-project-link').setAttribute('aria-label', gamesArrayES[key].name);
                  }
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            } else if(currentLang == "EN") {
              if(gamesArrayEN) {
                for (let key in gamesArrayEN) {
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');
    
                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }
                  
                  clone.setAttribute('data-project', key);
    
                  clone.querySelector('.card-project-img').setAttribute('src', gamesArrayEN[key].thumb);
                  clone.querySelector('.card-project-name h3').textContent = gamesArrayEN[key].name;
                  clone.querySelector('.card-project-type').textContent = gamesArrayEN[key].type;
                  clone.querySelector('.card-project-description').innerHTML = gamesArrayEN[key].description;
                  clone.querySelector('.card-platforms').textContent = gamesArrayEN[key].platforms;
                  clone.querySelector('.card-project-date').textContent = gamesArrayEN[key].date;
                  if(gamesArrayEN[key].url != "") {
                    clone.querySelector('.card-project-link').setAttribute('href', gamesArrayEN[key].url);

                    clone.querySelector('.card-project-link').setAttribute('aria-label', gamesArrayEN[key].name);
                  } else {
                    clone.querySelector('.card-project-link').classList.add('hidden');

                    clone.querySelector('.card-project-link').setAttribute('aria-label', gamesArrayEN[key].name);
                  }
                  if(gamesArrayEN[key].url != "") {
                    clone.querySelector('.card-project-name').setAttribute('href', gamesArrayEN[key].url);
                  } else {
                    clone.querySelector('.card-project-name').classList.add('hidden');
                  }
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            }
            break;
          
          case 'mugen':
            cardElem = cardContainer.querySelector(".card-mugen-elem");
            if(currentLang == "ES") {
              if(mugenArrayES) {
                for (let key in mugenArrayES) {
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');
    
                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }

                  clone.setAttribute('data-project', key);
    
                  clone.querySelector('.card-project-img').setAttribute('src', mugenArrayES[key].thumb);
                  clone.querySelector('.card-project-name h3').textContent = mugenArrayES[key].name;
                  clone.querySelector('.card-project-origin').textContent = mugenArrayES[key].origin;
                  clone.querySelector('.card-project-description').innerHTML = mugenArrayES[key].description;
                  clone.querySelector('.card-project-release').innerHTML = mugenArrayES[key].release;
                  clone.querySelector('.card-project-update').innerHTML = mugenArrayES[key].update;
                  
                  if(mugenArrayES[key].url != "") {
                    clone.querySelector('.card-project-link').setAttribute('href', mugenArrayES[key].url);

                    clone.querySelector('.card-project-link').setAttribute('aria-label', mugenArrayES[key].name);
                  } else {
                    clone.querySelector('.card-project-link').classList.add('hidden');

                    clone.querySelector('.card-project-link').setAttribute('aria-label', mugenArrayES[key].name);
                  }
                  if(mugenArrayES[key].url != "") {
                    clone.querySelector('.card-project-name').setAttribute('href', mugenArrayES[key].url);
                  } else {
                    clone.querySelector('.card-project-name').classList.add('hidden');
                  }
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            } else if(currentLang == "EN") {
              if(mugenArrayEN) {
                for (let key in mugenArrayEN) {
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');
    
                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }

                  clone.setAttribute('data-project', key);
    
                  clone.querySelector('.card-project-img').setAttribute('src', mugenArrayEN[key].thumb);
                  clone.querySelector('.card-project-name h3').textContent = mugenArrayEN[key].name;
                  clone.querySelector('.card-project-origin').textContent = mugenArrayEN[key].origin;
                  clone.querySelector('.card-project-description').innerHTML = mugenArrayEN[key].description;
                  clone.querySelector('.card-project-release').innerHTML = mugenArrayEN[key].release;
                  clone.querySelector('.card-project-update').innerHTML = mugenArrayEN[key].update;
                  
                  if(mugenArrayEN[key].url != "") {
                    clone.querySelector('.card-project-link').setAttribute('href', mugenArrayEN[key].url);

                    clone.querySelector('.card-project-link').setAttribute('aria-label', mugenArrayEN[key].name);
                  } else {
                    clone.querySelector('.card-project-link').classList.add('hidden');

                    clone.querySelector('.card-project-link').setAttribute('aria-label', mugenArrayEN[key].name);
                  }
                  if(mugenArrayEN[key].url != "") {
                    clone.querySelector('.card-project-name').setAttribute('href', mugenArrayEN[key].url);
                  } else {
                    clone.querySelector('.card-project-name').classList.add('hidden');
                  }
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            }
            break;
          
          case 'wip':
            cardElem = cardContainer.querySelector(".card-wip-elem");
            if(currentLang == "ES") {
              if(wipsArrayES) {
                for (let key in wipsArrayES) {
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');
    
                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }

                  clone.setAttribute('data-project', key);
    
                  clone.querySelector('.card-project-img').setAttribute('src', wipsArrayES[key].thumb);
                  clone.querySelector('.card-project-name h3').textContent = wipsArrayES[key].name;
                  clone.querySelector('.card-project-origin').textContent = wipsArrayES[key].origin;
                  clone.querySelector('.card-project-description').innerHTML = wipsArrayES[key].description;
                  
                  if(wipsArrayES[key].url != "") {
                    clone.querySelector('.card-project-link').setAttribute('href', wipsArrayES[key].url);

                    clone.querySelector('.card-project-link').setAttribute('aria-label', wipsArrayES[key].name);
                  } else {
                    clone.querySelector('.card-project-link').classList.add('hidden');

                    clone.querySelector('.card-project-link').setAttribute('aria-label', wipsArrayES[key].name);
                  }
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            } else if(currentLang == "EN") {
              if(wipsArrayEN) {
                for (let key in wipsArrayEN) {
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');
    
                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }

                  clone.setAttribute('data-project', key);
    
                  clone.querySelector('.card-project-img').setAttribute('src', wipsArrayEN[key].thumb);
                  clone.querySelector('.card-project-name h3').textContent = wipsArrayEN[key].name;
                  clone.querySelector('.card-project-origin').textContent = wipsArrayEN[key].origin;
                  clone.querySelector('.card-project-description').innerHTML = wipsArrayEN[key].description;
                  
                  if(wipsArrayEN[key].url != "") {
                    clone.querySelector('.card-project-link').setAttribute('href', wipsArrayEN[key].url);

                    clone.querySelector('.card-project-link').setAttribute('aria-label', wipsArrayEN[key].name);
                  } else {
                    clone.querySelector('.card-project-link').classList.add('hidden');

                    clone.querySelector('.card-project-link').setAttribute('aria-label', wipsArrayEN[key].name);
                  }
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            }
            break;
          
          case 'events':
            cardElem = cardContainer.querySelector(".card-event-elem");
            if(currentLang == "ES") {
              if(eventsArrayES) {
                for (let key in eventsArrayES) {
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');

                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }
    
                  clone.setAttribute('data-event', key);
    
                  clone.querySelector('.card-event-img').setAttribute('src', eventsArrayES[key].thumb);
                  clone.querySelector('.card-event-name h3').textContent = eventsArrayES[key].name;
                  if(eventsArrayES[key].url != "") {
                    clone.querySelector('.card-event-link').setAttribute('href', eventsArrayES[key].url);

                    clone.querySelector('.card-event-link').setAttribute('aria-label', eventsArrayES[key].name);
                  } else {
                    clone.querySelector('.card-event-link').classList.add('hidden');

                    clone.querySelector('.card-event-link').setAttribute('aria-label', eventsArrayES[key].name);
                  }
                  clone.querySelector('.card-event-type').textContent = eventsArrayES[key].type;
                  clone.querySelector('.card-event-date').textContent = eventsArrayES[key].date;
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            } else if(currentLang == "EN") {
              if(eventsArrayEN) {
                for (let key in eventsArrayEN) {
                  let clone = cardElem.cloneNode(true)
                  clone.classList.add('card-general-elem');
                  clone.classList.remove('hidden');
    
                  if(currentCard > currentCardLimit) {
                    clone.classList.add('hidden');
                  }

                  clone.setAttribute('data-event', key);
    
                  clone.querySelector('.card-event-img').setAttribute('src', eventsArrayEN[key].thumb);
                  clone.querySelector('.card-event-name h3').textContent = eventsArrayEN[key].name;
                  if(eventsArrayEN[key].url != "") {
                    clone.querySelector('.card-event-link').setAttribute('href', eventsArrayEN[key].url);
                  } else {
                    clone.querySelector('.card-event-link').classList.add('hidden');
                  }
                  clone.querySelector('.card-event-type').textContent = eventsArrayEN[key].type;
                  clone.querySelector('.card-event-date').textContent = eventsArrayEN[key].date;
    
                  cardContainer.appendChild(clone);
                  currentCard++;
                }
              }
            }
            break;
        }

        
        // cardElem.remove()
      });

    }


    /**
     * Show modal for the portfolio section
     * @public
     */
    const modalController = () => {
      const btnModal = document.querySelectorAll(".btn-modal"),
            btnModalClose = document.querySelectorAll(".btn-modal-close");
      
      if(btnModal) {
        btnModal.forEach(function(elem, index) {

          elem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('body').classList.add('overflow-hidden');
            let modalTarget = elem.getAttribute('data-modal');
            let modalElem = document.querySelector(modalTarget);
            modalElem.classList.remove('hidden');

            if(elem.classList.contains('modal-project')) {
              let currentProject = parents(elem, '.card-modal-elem')[0].getAttribute('data-project');
              
              if(currentLang == "ES") {
                document.querySelector('.modal-project-img').setAttribute('src', projectArrayES[currentProject].img);
                document.querySelector('.modal-project-name').textContent = projectArrayES[currentProject].name;
                document.querySelector('.modal-project-description').innerHTML = projectArrayES[currentProject].description;
                if(projectArrayES[currentProject].url != "") {
                  document.querySelector('.modal-project-link').setAttribute('href', projectArrayES[currentProject].url);
                } else {
                  document.querySelector('.modal-project-link').classList.add('hidden');
                }
              } else if(currentLang == "EN") {
                document.querySelector('.modal-project-img').setAttribute('src', projectArrayEN[currentProject].img);
                document.querySelector('.modal-project-name').textContent = projectArrayEN[currentProject].name;
                document.querySelector('.modal-project-description').innerHTML = projectArrayEN[currentProject].description;
                if(projectArrayEN[currentProject].url != "") {
                  document.querySelector('.modal-project-link').setAttribute('href', projectArrayEN[currentProject].url);
                } else {
                  document.querySelector('.modal-project-link').classList.add('hidden');
                }
              }
            } else if(elem.classList.contains('modal-event')) {
              let currentEvent = parents(elem, '.card-modal-elem')[0].getAttribute('data-event');
              if(currentLang == "ES") {
                document.querySelector('.modal-project-img').setAttribute('src', eventsArrayES[currentEvent].img);
                document.querySelector('.modal-project-name').textContent = eventsArrayES[currentEvent].name;
                document.querySelector('.modal-project-description').innerHTML = eventsArrayES[currentEvent].description;
                if(eventsArrayES[currentEvent].url != "") {
                  document.querySelector('.modal-project-link').setAttribute('href', eventsArrayES[currentEvent].url);
                } else {
                  document.querySelector('.modal-project-link').classList.add('hidden');
                }
              } else if(currentLang == "EN") {
                document.querySelector('.modal-project-img').setAttribute('src', eventsArrayEN[currentEvent].img);
                document.querySelector('.modal-project-name').textContent = eventsArrayEN[currentEvent].name;
                document.querySelector('.modal-project-description').innerHTML = eventsArrayEN[currentEvent].description;
                if(eventsArrayEN[currentEvent].url != "") {
                  document.querySelector('.modal-project-link').setAttribute('href', eventsArrayEN[currentEvent].url);
                } else {
                  document.querySelector('.modal-project-link').classList.add('hidden');
                }
              }
            }
          });

        });
      }

      if(btnModalClose) {
        btnModalClose.forEach(function(elem, index) {

          elem.addEventListener('click', (event) => {
            event.preventDefault();

            document.querySelector('body').classList.remove('overflow-hidden');
            
            let currentModal = parents(elem, '.modal')[0];
            currentModal.classList.add('hidden');

            document.querySelector('.modal-project-img').setAttribute('src', '');
          });

        });
      }
    }


    /**
     * Load more cards if there are any hidden
     * @public
     */
    const showMoreController = () => {
      const btnShowMoreStep = document.querySelectorAll(".btn-show-more");

      let className = '';

      if(btnShowMoreStep) {
        btnShowMoreStep.forEach(function(elem, index) {
          let classElems = elem.getAttribute('data-class'),
              totalElems = document.querySelectorAll('.'+classElems).length,
              itemsStep = elem.getAttribute('data-show-elems');
          if(totalElems > itemsStep) {
            elem.classList.remove('hidden');
          }
          
          elem.addEventListener('click', (event) => {
            let totalItemsStep = elem.getAttribute('data-show-elems');
            let currentItemsStep = 0;
            event.preventDefault();
            className = "."+event.currentTarget.getAttribute('data-class')+".hidden";

            // console.log(className)

            let elemsLeft = document.querySelectorAll(className).length;


            if( elemsLeft > 0) {
              document.querySelectorAll(className).forEach(function(el, ind) {
                if (currentItemsStep < totalItemsStep) {
                  
                  if(el.classList.contains('card-general-elem')) {
                    // console.log(index)
                    if(el.classList.contains('hidden')) {
                      el.classList.remove('hidden');
                    }
                    currentItemsStep += 1;
                  }
                }
              });
            }

            elemsLeft = document.querySelectorAll(className).length;
            
            
            if(elemsLeft <= 1) {
              elem.classList.add('hidden');
            }


            

          })
        });
      }
    }


    /**
     * Start all logic of the website
     * @public
     */
    const init = () => {
      mobileMenuController();
      // scrollController();

      backgroundFollowController();
      projectCardsController();
      languageSwitchController();
      modalController();

      showMoreController();

      langSetStart();
    }

    init();
  })();

});