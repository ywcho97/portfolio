        (function(){
            var root=document.documentElement,reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
            root.classList.add('js');
            var sw=document.querySelectorAll('.sw button');
            sw.forEach(function(b){b.addEventListener('click',function(){
                var p=b.getAttribute('data-p');
                if(p==='blue'){root.removeAttribute('data-palette')}else{root.setAttribute('data-palette',p)}
                sw.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
            })});

            var cards=[].slice.call(document.querySelectorAll('.card'));
            [0,2,3].forEach(function(n,i){var s=cards[n]&&cards[n].querySelector('img');if(s)document.querySelectorAll('.hc img')[i].src=s.src});

            var dlg=document.getElementById('dlg'),di=dlg.querySelector('img');
            cards.forEach(function(c,i){
                c.style.setProperty('--dl',(i%3)*90+'ms');
                c.querySelector('.open').addEventListener('click',function(){
                var im=c.querySelector('img');
                di.src=im.src;di.alt=im.alt;
                dlg.querySelector('h3').textContent=c.querySelector('strong').textContent;
                dlg.querySelector('.dm').textContent=c.querySelector('em').textContent;
                dlg.querySelector('.dd').innerHTML=c.querySelector('.dt').innerHTML;
                dlg.showModal();dlg.querySelector('.pane').scrollTop=0;
                });
            });
            dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
            dlg.querySelector('.x').addEventListener('click',function(){dlg.close()});

            var cur=document.getElementById('cur');
            if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
                document.addEventListener('pointermove',function(e){cur.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'});
                document.querySelectorAll('.open').forEach(function(b){
                b.addEventListener('pointerenter',function(){cur.classList.add('on')});
                b.addEventListener('pointerleave',function(){cur.classList.remove('on')});
                });
                dlg.addEventListener('close',function(){cur.classList.remove('on')});
            }

            var targets=[].slice.call(document.querySelectorAll('.card,.list li,section h2'));
            document.querySelectorAll('.list li').forEach(function(el){el.classList.add('ln');el.style.transitionDelay=(Array.prototype.indexOf.call(el.parentNode.children,el)%6)*80+'ms'});
            if(reduce||!('IntersectionObserver' in window)){targets.forEach(function(el){el.classList.add('in')})}
            else{
                var io=new IntersectionObserver(function(es){es.forEach(function(en){
                var el=en.target;
                if(en.isIntersecting){el.classList.add('in')}
                else{var up=en.boundingClientRect.top<0;el.style.setProperty('--ty',up?'-36px':'36px');el.style.setProperty('--rt',up?'-1.4deg':'1.4deg');el.classList.remove('in')}
                })},{rootMargin:'0px 0px -8% 0px'});
                targets.forEach(function(el){io.observe(el)});
            }

            var prog=document.getElementById('prog'),hero=document.querySelector('.hero'),nav=document.querySelector('.nav');
            var rows=[].slice.call(document.querySelectorAll('.bd .row')),per=[];
            rows.forEach(function(r){r.innerHTML=r.innerHTML.repeat(4)});
            function measure(){rows.forEach(function(r,i){var g=parseFloat(getComputedStyle(r).columnGap)||0;per[i]=(r.offsetWidth+g)/4})}
            var raf=0,vel=0,last=window.scrollY;
            function tick(){
                raf=0;
                var y=window.scrollY,max=document.documentElement.scrollHeight-window.innerHeight;
                prog.style.transform='scaleX('+(max>0?Math.min(1,y/max):0)+')';
                nav.classList.toggle('sc',y>40);
                if(reduce)return;
                vel+=((y-last)-vel)*.25;last=y;
                root.style.setProperty('--v',Math.max(-14,Math.min(14,vel)).toFixed(2));
                if(Math.abs(vel)>.05&&!raf)raf=requestAnimationFrame(tick);
                root.style.setProperty('--y',Math.round(y));
                root.style.setProperty('--s',Math.min(1,y/(hero.offsetHeight*.9)).toFixed(3));
                rows.forEach(function(r,i){var o=(y*.5)%per[i];r.style.transform='translateX('+(i?o-per[i]:-o)+'px)'});
            }
            window.addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(tick)},{passive:true});
            window.addEventListener('resize',function(){measure();tick()});
            if(document.fonts&&document.fonts.ready){document.fonts.ready.then(function(){measure();tick()})}
            document.querySelector('.bl').addEventListener('click',function(e){
                if(window.scrollY>hero.offsetHeight*.5){e.preventDefault();window.scrollTo({top:0,behavior:reduce?'auto':'smooth'})}
            });
            measure();tick();
        })();        (function(){
            var root=document.documentElement,reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
            root.classList.add('js');
            var sw=document.querySelectorAll('.sw button');
            sw.forEach(function(b){b.addEventListener('click',function(){
                var p=b.getAttribute('data-p');
                if(p==='blue'){root.removeAttribute('data-palette')}else{root.setAttribute('data-palette',p)}
                sw.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
            })});

            var cards=[].slice.call(document.querySelectorAll('.card'));
            [0,2,3].forEach(function(n,i){var s=cards[n]&&cards[n].querySelector('img');if(s)document.querySelectorAll('.hc img')[i].src=s.src});

            var dlg=document.getElementById('dlg'),di=dlg.querySelector('img');
            cards.forEach(function(c,i){
                c.style.setProperty('--dl',(i%3)*90+'ms');
                c.querySelector('.open').addEventListener('click',function(){
                var im=c.querySelector('img');
                di.src=im.src;di.alt=im.alt;
                dlg.querySelector('h3').textContent=c.querySelector('strong').textContent;
                dlg.querySelector('.dm').textContent=c.querySelector('em').textContent;
                dlg.querySelector('.dd').innerHTML=c.querySelector('.dt').innerHTML;
                dlg.showModal();dlg.querySelector('.pane').scrollTop=0;
                });
            });
            dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
            dlg.querySelector('.x').addEventListener('click',function(){dlg.close()});

            var cur=document.getElementById('cur');
            if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
                document.addEventListener('pointermove',function(e){cur.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'});
                document.querySelectorAll('.open').forEach(function(b){
                b.addEventListener('pointerenter',function(){cur.classList.add('on')});
                b.addEventListener('pointerleave',function(){cur.classList.remove('on')});
                });
                dlg.addEventListener('close',function(){cur.classList.remove('on')});
            }

            var targets=[].slice.call(document.querySelectorAll('.card,.list li,section h2'));
            document.querySelectorAll('.list li').forEach(function(el){el.classList.add('ln');el.style.transitionDelay=(Array.prototype.indexOf.call(el.parentNode.children,el)%6)*80+'ms'});
            if(reduce||!('IntersectionObserver' in window)){targets.forEach(function(el){el.classList.add('in')})}
            else{
                var io=new IntersectionObserver(function(es){es.forEach(function(en){
                var el=en.target;
                if(en.isIntersecting){el.classList.add('in')}
                else{var up=en.boundingClientRect.top<0;el.style.setProperty('--ty',up?'-36px':'36px');el.style.setProperty('--rt',up?'-1.4deg':'1.4deg');el.classList.remove('in')}
                })},{rootMargin:'0px 0px -8% 0px'});
                targets.forEach(function(el){io.observe(el)});
            }

            var prog=document.getElementById('prog'),hero=document.querySelector('.hero'),nav=document.querySelector('.nav');
            var rows=[].slice.call(document.querySelectorAll('.bd .row')),per=[];
            rows.forEach(function(r){r.innerHTML=r.innerHTML.repeat(4)});
            function measure(){rows.forEach(function(r,i){var g=parseFloat(getComputedStyle(r).columnGap)||0;per[i]=(r.offsetWidth+g)/4})}
            var raf=0,vel=0,last=window.scrollY;
            function tick(){
                raf=0;
                var y=window.scrollY,max=document.documentElement.scrollHeight-window.innerHeight;
                prog.style.transform='scaleX('+(max>0?Math.min(1,y/max):0)+')';
                nav.classList.toggle('sc',y>40);
                if(reduce)return;
                vel+=((y-last)-vel)*.25;last=y;
                root.style.setProperty('--v',Math.max(-14,Math.min(14,vel)).toFixed(2));
                if(Math.abs(vel)>.05&&!raf)raf=requestAnimationFrame(tick);
                root.style.setProperty('--y',Math.round(y));
                root.style.setProperty('--s',Math.min(1,y/(hero.offsetHeight*.9)).toFixed(3));
                rows.forEach(function(r,i){var o=(y*.5)%per[i];r.style.transform='translateX('+(i?o-per[i]:-o)+'px)'});
            }
            window.addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(tick)},{passive:true});
            window.addEventListener('resize',function(){measure();tick()});
            if(document.fonts&&document.fonts.ready){document.fonts.ready.then(function(){measure();tick()})}
            document.querySelector('.bl').addEventListener('click',function(e){
                if(window.scrollY>hero.offsetHeight*.5){e.preventDefault();window.scrollTo({top:0,behavior:reduce?'auto':'smooth'})}
            });
            measure();tick();
        })();