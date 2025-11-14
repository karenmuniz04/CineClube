// script.js

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const oficina = urlParams.get('oficina'); // Captura o parâmetro da URL
    const curtasContainer = document.getElementById('curtas-container');

    if (oficina) {
        // Define os curtas para cada oficina
        const curtas = {
            oficina_III: [
                { title: 'Professor Gustavo Lima', video: 'https://youtu.be/OZuzLHkIIm0'},
                { title: 'Professor Gustavo Lima', video: 'https://youtu.be/0Ouxb2dJNWw?si=1EUnOqSd6k2W1WVA'},
                { title: 'Diretor: Janine Galvão', video: 'https://youtu.be/R4JViKN0LVc?si=9sj03ulKZyqFeoQ9'},
                { title: 'Diretor: João Eduardo', video: 'https://youtu.be/x5iW7zzl0Ok?si=-07nazQ8m75vR_CA'},
                { title: 'Diretor: Luciano Reis', video: 'https://youtu.be/z_hFdGyDMxY?si=0_q-4N7kJ-uE_OPd'},
                { title: 'Diretor: Luciano Reis', video: 'https://youtu.be/ASHUQdKZE-E?si=Ab9jVDh3nhOiayJ8'},
                { title: 'Diretor: Márcio César', video: 'https://youtu.be/oIl0udKe50k?si=ydlxHFm33UgVUCMm'},
                { title: 'Diretor: Márcio César', video: 'https://youtu.be/-FxiMLD-Jpw?si=bpvxLEtnqRFCTrny'},
                { title: 'Diretora: Rosângela', video: 'https://youtu.be/nE7zi-SCWdk?si=iaPsSaxc1A5JUrmQ'}
            ],
            oficina_IV: [
                { title: 'Diretor: Eudes', video: 'https://youtu.be/QSxxydmofsw?si=88Y3cZSQ--kT3hWI'},
                { title: 'Diretor: Gustavo Lima', video: 'https://youtu.be/TP196oTGRkI?si=eP5h9ltTWumHdWuB'},
                { title: 'Diretor: João Eduardo', video: 'https://youtu.be/1wV6ngpHhH0?si=_xiAN0Ym5PRjun0Q'},
                { title: 'Diretor: Márcio César', video: 'https://youtu.be/YVnNAhdhHg8?si=CVmOg8TDyhkhYzuD'},
                { title: 'Diretora: Rosângela Reinaldo', video: 'https://youtu.be/96efKcXIWBU?si=-2slNRjvdWuRFIVQ'},
                { title: 'Diretor: Luciano Reis ', video: 'https://youtu.be/ieIANdf7RlM?si=idfKdw60zVad8hIi'},
                { title: 'Diretora: Rosângela Reinaldo', video: 'https://youtu.be/bN7hYWov5y0?si=_gxxExa6s92Pwll7'}
            ],
            oficina_V: [
                { title: 'Diretor: Eudes', video: 'https://youtu.be/hSIQuIgEjuo?si=eU-hbYcZfS57rwe_'},
                { title: 'Diretor: Eudes', video: 'https://youtu.be/s9NI4Txe6PY?si=WIJGmezl1-Ans7sR'}
            ],
            oficina_VI: [
                { title: '', video: 'https://youtu.be/bfvaj-CfpzA?si=pq4SxNY8SZj5_10m'},
                { title: '', video: 'https://youtu.be/Sj98ha19F-c?si=03rfN9K7CLDxdv3b'},
                { title: '', video: 'https://youtu.be/QRT9HRY5G3Q?si=RRfJDwPkOkYp2FV2'},
                { title: '', video: 'https://youtu.be/y6hRk6M8JcA?si=6MUdstGBfgVYxTER'},
                { title: '', video: 'https://youtu.be/KL1DVsH22ck?si=OhflWBOrDcejUTKC'},
                { title: '', video: 'https://youtu.be/qIPM4pYOH-U?si=aG_zPbFed8YB8vpy'}
            ],
            oficina_VII: [
                { title: '', video: 'https://youtu.be/QFEHbWXSAQA?si=m6IyIw7-tNxRNKrG', image: './images/oficina_7/1.png' },
                { title: '', video: 'https://youtu.be/kQo_Ht6is28?si=py5oSLjqR_Htklb5', image: './images/oficina_7/2.png' },
                { title: '', video: 'https://youtu.be/ykR4G60FNxA?si=Dwmsc38MrnzEW3Yr', image: './images/oficina_7/4.png' },
                { title: '', video: 'https://youtu.be/xEEtc4nLSBc?si=ohkbz4se-wVgjSex', image: './images/oficina_7/5.png' },
                { title: '', video: 'https://youtu.be/dAifqtGUvTE?si=6BQXa-5169aX18Dq', image: './images/oficina_7/6.png' },
                { title: '', video: 'https://youtu.be/vPWpOQqaisE?si=Vf2ClEDHeNMGBlpR', image: './images/oficina_7/7.png' },
                { title: '', video: 'https://youtu.be/cp6L4gqHApA?si=qoQ8JEnya7CC3Taa', image: './images/oficina_7/8.png' },
                { title: '', video: 'https://youtu.be/OO4NS0xjKIA?si=ru9907US3zSjqU7q', image: './images/oficina_7/9.png' },
                { title: '', video: 'https://youtu.be/pYsyL45O_W4?si=W97D2KmcAg557WCN', image: './images/oficina_7/10.png' },
                { title: '', video: 'https://youtu.be/pY6pyiRGgS0?si=-0WLs0NUl77n8Ncs', image: './images/oficina_7/11.png' },
                { title: '', video: './videos/oficina_7/12.MOV', image: './images/oficina_7/12.png' },
                { title: '', video: './videos/oficina_7/13.MOV', image: './images/oficina_7/13.png' },
                { title: '', video: './videos/oficina_7/14.MOV', image: './images/oficina_7/14.png' },
                { title: '', video: './videos/oficina_7/15.MOV', image: './images/oficina_7/15.png' },
                { title: '', video: './videos/oficina_7/16.MOV', image: './images/oficina_7/16.png' },
                { title: '', video: './videos/oficina_7/17.MOV', image: './images/oficina_7/17.png' },
                { title: '', video: './videos/oficina_7/18.MOV', image: './images/oficina_7/18.png' },
                { title: '', video: './videos/oficina_7/19.MOV', image: './images/oficina_7/19.png' },
                { title: '', video: './videos/oficina_7/20.MOV', image: './images/oficina_7/20.png' },
                { title: '', video: './videos/oficina_7/21.MOV', image: './images/oficina_7/21.png' },
                { title: '', video: './videos/oficina_7/22.MOV', image: './images/oficina_7/22.png' },
                { title: '', video: './videos/oficina_7/23.MOV', image: './images/oficina_7/23.png' },
            ]
        };

        // Verifica se a oficina existe no objeto de curtas
        if (curtas[oficina]) {
            curtas[oficina].forEach(curta => {
                const curtaItem = document.createElement('div');
                curtaItem.classList.add('curta-item');

                const title = document.createElement('h2');
                title.textContent = curta.title;

                let videoId = curta.video.split('/').pop(); 
                if (videoId.includes('?')) {
                    videoId = videoId.split('?')[0]; 
                }
                const embedUrl = `https://www.youtube.com/embed/${videoId}`;

                const iframe = document.createElement('iframe');
                iframe.src = embedUrl;
                iframe.width = '760';
                iframe.height = '315';
                iframe.frameBorder = '0';
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                iframe.title = 'YouTube video player';

                curtaItem.appendChild(title);
                curtaItem.appendChild(iframe);

                curtasContainer.appendChild(curtaItem);
            });
        } else {
            curtasContainer.innerHTML = '<p>Nenhum curta encontrado para esta oficina.</p>';
        }
    } else {
        curtasContainer.innerHTML = '<p>Nenhuma oficina selecionada.</p>';
    }
});
