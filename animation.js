 
 document.addEventListener('DOMContentLoaded', () => {
            const items = document.querySelectorAll('.csr26-item-4, .csr26-msp-item-4');

            items.forEach((item) => {
                const prefix = item.classList.contains('csr26-msp-item-4') ? 'csr26-msp-' : 'csr26-';
                const answer = item.querySelector('.' + prefix + 'answer-1');
                const icon = item.querySelector('.' + prefix + 'question-1 i');

                if (item.classList.contains(prefix + 'active-1')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.classList.replace('fa-plus-circle', 'fa-minus-circle');
                }

                item.addEventListener('click', () => {
                    const isActive = item.classList.contains(prefix + 'active-1');

                    items.forEach((faq) => {
                        const faqPrefix = faq.classList.contains('csr26-msp-item-4') ? 'csr26-msp-' : 'csr26-';

                        faq.classList.remove(faqPrefix + 'active-1');

                        faq.querySelector('.' + faqPrefix + 'answer-1').style.maxHeight = '0px';

                        const i = faq.querySelector('.' + faqPrefix + 'question-1 i');
                        i.classList.replace('fa-minus-circle', 'fa-plus-circle');
                    });

                    if (!isActive) {
                        item.classList.add(prefix + 'active-1');

                        answer.style.maxHeight = answer.scrollHeight + 'px';

                        icon.classList.replace('fa-plus-circle', 'fa-minus-circle');
                    }
                });
            });
        });
 
 
 
 document.addEventListener('DOMContentLoaded', () => {
            const megaItems = document.querySelectorAll('.csr26-mega-item');
            const mobileQuery = window.matchMedia('(max-width: 1100px)');

            const closeItem = (item) => {
                item.classList.remove('csr26-mega-open');
                const panel = item.querySelector('.csr26-mega-panel');
                if (panel) panel.style.maxHeight = '0px';
            };

            megaItems.forEach((item) => {
                const trigger = item.querySelector('.csr26-mega-trigger');
                const panel = item.querySelector('.csr26-mega-panel');
                if (!trigger || !panel) return;

                trigger.addEventListener('click', (e) => {
                    if (!mobileQuery.matches) return;

                    e.preventDefault();
                    const isOpen = item.classList.contains('csr26-mega-open');

                    megaItems.forEach(closeItem);

                    if (!isOpen) {
                        item.classList.add('csr26-mega-open');
                        panel.style.maxHeight = panel.scrollHeight + 'px';
                    }
                });
            });

            mobileQuery.addEventListener('change', () => {
                megaItems.forEach(closeItem);
            });
        });


        document.addEventListener('DOMContentLoaded', () => {
                    const revealEls = document.querySelectorAll('.csr26-stack-1');
                    if (!revealEls.length) return;

                    const io = new IntersectionObserver((entries, observer) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('csr26-in-view');
                                observer.unobserve(entry.target);
                            }
                        });
                    }, { threshold: 0.2 });

                    revealEls.forEach((el) => io.observe(el));
                });



                document.addEventListener('DOMContentLoaded', () => {
                    const revealEls = document.querySelectorAll('.csr26-grid-2');
                    if (!revealEls.length) return;

                    const io = new IntersectionObserver((entries, observer) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('csr26-in-view');
                                observer.unobserve(entry.target);
                            }
                        });
                    }, { threshold: 0.2 });

                    revealEls.forEach((el) => io.observe(el));
                });
