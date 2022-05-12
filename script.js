searchForm = document.querySelector('.search-form');
// .search-form, como era chamado no HTML, será chamado de searchForm no JS


document.querySelector('#search-btn').onclick = () =>
{
    // Quando o potão de pesquisa do header for presionado, o form será exibido
    searchForm.classList.toggle('active');
    // característica 'active' será útil no css
}


window.onscroll = () => 
{
    searchForm.classList.remove('active')

    // Deixando o 'navbar' fixo caso o usuário "role" a tela
    // 'window.scrollY' analisa a posição atual da página no eixo 'Y'
    // Se a posição da tela for maior que a posição 80 do eixo 'Y', o 'navbar' ficará fixo na tela

    if(window.scrollY > 80)
    {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload=() =>
{ 
    if(window.scrollY > 80)
    {
      document.querySelector('.header .header-2').classList.add('active');
    }
    else
    {
     document.querySelector ('.header .header-2').classList.remove( 'active');
    }
}
























