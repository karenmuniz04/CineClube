// script.js

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const oficina = urlParams.get('oficina'); // Captura o parâmetro da URL
    const curtasContainer = document.getElementById('curtas-container');

    if (oficina) {
        // Define os curtas para cada oficina
        const curtas = {
            oficina_III: [
                { title: 'Diretor: Gustavo Lima', video: './videos/oficina_3/1_Vídeo P. Gustavo Lima.mp4', image: './images/oficina_3/minuto01.jpg' },
                { title: 'Diretor: Gustavo Lima', video: './videos/oficina_3/2_Vídeo P. Gustavo Lima.mp4', image: './images/oficina_3/minuto02.jpg' },
                { title: 'Diretor: Janine Galvão', video: './videos/oficina_3/3_Vídeo P. Janine Galvão.mp4', image: './images/oficina_3/minuto03.jpg'},
                { title: 'Diretor: João Eduardo', video: './videos/oficina_3/4_Vídeo P. João Eduardo.mp4', image: './images/oficina_3/minuto04.jpg'},
                { title: 'Diretor: Luciano Reis', video: './videos/oficina_3/5_Video P. Luciano Reis.mp4', image: './images/oficina_3/minuto05.jpg'},
                { title: 'Diretor: Luciano Reis', video: './videos/oficina_3/6_Vídeo P. Luciano Reis.mp4', image: './images/oficina_3/minuto06.jpg'},
                { title: 'Diretor: Márcio César', video: './videos/oficina_3/7_Vídeo P. Marcio Cesar.mp4', image: './images/oficina_3/minuto07.jpg'},
                { title: 'Diretor: Márcio César', video: './videos/oficina_3/8_Vídeo P. Marcio Cesar.mp4', image: './images/oficina_3/minuto08.jpg'},
                { title: 'Diretora: Rosângela', video: './videos/oficina_3/9_Vídeo P. Rosângela.mp4', image: './images/oficina_3/minuto09.jpg'},
                { title: 'Diretora: Paula Ortiz', video: './videos/oficina_3/10_Vídeo Paula Ortiz.mp4', image: './images/oficina_3/minuto10.jpg'}
            ],
            oficina_IV: [
                { title: 'Diretor: Eudes', video: './videos/oficina_4/1_Vídeo P. Eudes.mp4', image: 'images/oficina_4/planos01.jpg' },
                { title: 'Diretor: Gustavo Lima', video: './videos/oficina_4/2_Vídeo P. Gustavo Lima.mp4', image: 'images/oficina_4/planos02.jpg' },
                { title: 'Diretor: João Eduardo', video: './videos/oficina_4/3_Vídeo P. João Eduardo.mp4', image: 'images/oficina_4/planos03.jpg' },
                { title: 'Diretor: Márcio César', video: './videos/oficina_4/4_Vídeo Prof Marcio Cesar.mp4', image: 'images/oficina_4/planos04.jpg' },
                { title: 'Diretora: Rosângela Reinaldo', video: './videos/oficina_4/5_Vídeo Prof Rosângela Reinaldo.mp4', image: 'images/oficina_4/planos05.jpg' },
                { title: 'Diretor: Luciano Reis ', video: './videos/oficina_4/6_Vídeo Prof. Luciano Reis.mp4', image: 'images/oficina_4/planos06.jpg' },
                { title: 'Diretora: Rosângela Reinaldo', video: './videos/oficina_4/7_Vídeo Prof. Rosângela Reinaldo.mp4', image: 'images/oficina_4/planos07.jpg' }
            ],
            oficina_V: [
                { title: 'Diretor: Janine Galvão', video: './videos/oficina_5/1_Vídeo Janine Galvão.mp4', image: 'images/oficina_5/Cortes 01.jpg' },
                { title: 'Diretor: João Eduardo', video: './videos/oficina_5/2_Vídeo João Eduardo.mp4', image: 'images/oficina_5/Cortes02.jpg' }
            ],
            oficina_VI: [
                { title: '', video: './videos/oficina_6/Vídeo 1.mp4', image: './images/oficina_6/1.jpeg' },
                { title: '', video: './videos/oficina_6/Vídeo 2.mp4', image: './images/oficina_6/2.jpeg' },
                { title: '', video: './videos/oficina_6/Vídeo 3.mp4', image: './images/oficina_6/3.jpeg' },
                { title: '', video: './videos/oficina_6/Vídeo 4.mp4', image: './images/oficina_6/4.jpeg' },
                { title: '', video: './videos/oficina_6/Vídeo 5.mp4', image: './images/oficina_6/5.jpeg' },
                { title: '', video: './videos/oficina_6/Vídeo 6.mp4', image: './images/oficina_6/6.jpeg' }
            ],
            oficina_VII: [
                { title: '', video: './videos/oficina_7/1.MOV', image: './images/oficina_7/1.png' },
                { title: '', video: './videos/oficina_7/2.MOV', image: './images/oficina_7/2.png' },
                { title: '', video: './videos/oficina_7/4.MOV', image: './images/oficina_7/4.png' },
                { title: '', video: './videos/oficina_7/5.MOV', image: './images/oficina_7/5.png' },
                { title: '', video: './videos/oficina_7/6.MOV', image: './images/oficina_7/6.png' },
                { title: '', video: './videos/oficina_7/7.MOV', image: './images/oficina_7/7.png' },
                { title: '', video: './videos/oficina_7/8.MOV', image: './images/oficina_7/8.png' },
                { title: '', video: './videos/oficina_7/9.MOV', image: './images/oficina_7/9.png' },
                { title: '', video: './videos/oficina_7/10.MOV', image: './images/oficina_7/10.png' },
                { title: '', video: './videos/oficina_7/11.MOV', image: './images/oficina_7/11.png' },
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

                const img = document.createElement('img');
                img.src = curta.image; // Imagem do curta
                img.alt = curta.title;

                const figcaption = document.createElement('figcaption');

                const title = document.createElement('h2');
                title.textContent = curta.title;

                const videoLink = document.createElement('a');
                videoLink.href = curta.video;
                videoLink.textContent = 'Assista aqui!';

                figcaption.appendChild(title);
                figcaption.appendChild(videoLink);

                curtaItem.appendChild(img);
                curtaItem.appendChild(figcaption);

                curtasContainer.appendChild(curtaItem);
            });
        } else {
            curtasContainer.innerHTML = '<p>Nenhum curta encontrado para esta oficina.</p>';
        }
    } else {
        curtasContainer.innerHTML = '<p>Nenhuma oficina selecionada.</p>';
    }
});