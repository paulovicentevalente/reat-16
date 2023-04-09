import React from "react";
import photo from "./components/images/DSC_8193-modified.png";
import GitHubIcon from '@mui/icons-material/GitHub';
const htmlTextsEnglish = [
    // rules
    //id: sequential integer number
    //compnnent: name of the React component
    //item: concept name of an item
    //totalItem: total number of items
    //numberItem: sequential item number id
    //typeItem: subtype of an item
    //content: text to be presented - string - first position is number of text strings
    // idiom: idiom that content is created
    
    {
        id: 1,
        component: "Navbar",
        item: "name",
        totalItem: 1,
        numberItem: 0,
        typeItem: "myName",
        content: [1, (<a className="navbar-brand" href="http://www.paulovalente.net/">Paulo Vicente Valente</a>)],
        idiom: "any"
    },
    {
        id: 2,
        component: "Navbar",
        item: "experience",
        totalItem: 1,
        numberItem: 0,
        typeItem: "titleMenu",
        content: [1, (<a className="nav-link" href="#experience">Experience</a>)],
        idiom: "english"
    },
    {
        id: 3,
        component: "Navbar",
        item: "skills",
        totalItem: 1,
        numberItem: 0,
        typeItem: "titleMenu",
        content: [1, (<a className="nav-link" href="#skills">Skills</a>)],
        idiom: "english"
    },
    {
        id: 4,
        component: "Navbar",
        item: "contact",
        totalItem: 1,
        numberItem: 0,
        typeItem: "linkMenu",
        content: [1, (<a className="nav-link" aria-label="Linkedin" href="https://www.linkedin.com/in/paulovicentevalente/" target="_blank" rel="noreferrer"><i className="brands fa-brands fa-linkedin"></i></a>)],
        idiom: "english"
    },
    {
        id: 5,
        component: "Navbar",
        item: "subscribe",
        totalItem: 1,
        numberItem: 0,
        typeItem: "linkMenu",
        content: [1, (<a className="nav-link" aria-label="Mailchimp" href="http://eepurl.com/hWW8GL" target="_blank" rel="noreferrer"><i className="brands fa-solid fa-envelope"></i></a>)],
        idiom: "english"
    },
    {
        id: 6,
        component: "Navbar",
        item: "idiomMenu",
        totalItem: 1,
        numberItem: 0,
        typeItem: "portugues",
        content: [1, (<a className="nav-link" href="#portugues">pt-br</a>)],
        idiom: "english"
    },
    {
        id: 7,
        component: "Title",
        item: "photo",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myPhoto",
        content: [1, (<p><img className="title-image" src={photo} alt="paulo"></img></p>)],
        idiom: "any"
    },
    {
        id: 8,
        component: "Title",
        item: "message",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myMessage",
        content: [1, (<h1 className="big-heading">Throughout my career, I contributed to the launch of several technological products that significantly improved and transformed the client experience.</h1>)],
        idiom: "english"
    },
    {
        id: 9,
        component: "Title",
        item: "e-mail",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myE-mail",
        content: [1, (<p className="email">e-mail: paulo@paulovalente.net</p>)],
        idiom: "english"
    },
    {
        id: 10,
        component: "Experience",
        item: "title",
        totalItem: 1,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h2>Experience</h2>)],
        idiom: "english"
    },
    {
        id: 11,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://atento.com/pb/" target="_blank" rel="noreferrer">Atento</a></p>)],
        idiom: "english"
    },
    {
        id: 12,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2021</p>)],
        idiom: "english"
    },
    {
        id: 13,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Head of Product Management</p>)],
        idiom: "english"
    },
    {
        id: 14,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Management of product and operational labs teams at Contact Center business. Defined lab operation based on <em>business metrics</em> which selected initiatives that <em>improved customer results</em>.</p>)],
        idiom: "english"
    },
    {
        id: 15,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.vivo.com.br/" target="_blank" rel="noreferrer">Vivo</a></p>)],
        idiom: "english"
    },
    {
        id: 16,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2003 to 2019</p>)],
        idiom: "english"
    },
    {
        id: 17,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [4, (<p className="experience-text">Product Development Manager</p>),
        (<p className="experience-text sub-position">Division Manager</p>),
        (<p className="experience-text sub-position">Device Technical Specifications Manager</p>),
        (<p className = "sub-position">Product Development Consultant</p>)],
        idiom: "english"
    },
    {
        id: 18,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescription",
        content: [1, (<p className="experience-text">Manager of <em>Product Development team</em> (engineers/ computer science):</p>), (<p className="experience-text">Leader of team responsible for technology and products: <em>new services and products with customer-centric approach</em>, innovation, product backlog, <em>design trade-offs analysis, launch risk analysis</em>, enhancement (usability and blueprint), <em>lifecycle, tech roadmap, RFPs, contract management, partnership maintenance</em>, bill of materials, training development (customer care and sales force), regulatory trends, families: <em>smartphone/ <a href='https://globoplay.globo.com/v/4880435/' target='_blank'  rel="noreferrer">modem</a>/ CPE/ smartcard/ IoT/ M2M</em>, country representative at the following <em>International forums</em>: PTCRB, CDG and Telefónica Devices.</p>),(<p className="experience-text">Led <em>Go-to-MKT (multidisciplinary) team</em>:</p>),(<p>BTL (Below the line): product and technnology communication(briefing) and internal press office support: crisis and press release.</p>)],
        idiom: "english"
    },
    {
        id: 19,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.uff.br/" target="_blank" rel="noreferrer">Universidade Federal Fluminense</a></p>)],
        idiom: "english"
    },
    {
        id: 20,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2008 to 2011</p>)],
        idiom: "english"
    },
    {
        id: 21,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Invited Professor</p>)],
        idiom: "english"
    },
    {
        id: 22,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Engineering MBA and <a href="http://www.telecomuff.com/uploads/6/9/4/8/6948141/especializac%CC%A7a%CC%83o_em_comunicac%CC%A7o%CC%83es_mo%CC%81veis_-_projeto_rj_.pdf" target="_blank" rel="noreferrer">Post Graduation</a> <em>Invited Professor</em>. Provided classes on WLAN, Mobile Devices, Core Network, CDMA2000.</p>)],
        idiom: "english"
    },
    {
        id: 23,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Telefônica Celular*</p>)],
        idiom: "english"
    },
    {
        id: 24,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2002 to 2003</p>)],
        idiom: "english"
    },
    {
        id: 25,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Solutions Manager</p>)],
        idiom: "english"
    },
    {
        id: 26,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Increase <em>service retention</em> due to the development of <em>customized solutions</em> for corporate clients. <em>Remote management experience</em> with team in four states of Brazil, <em>inventory management</em>, <em>client-oriented</em> approach. <font size="1">*Telefônica Celular is one of the companies that formed the current Vivo.</font></p>)],
        idiom: "english"
    },
    {
        id: 27,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.movistar.es/" target="_blank" rel="noreferrer">Telefónica Móviles de España</a></p>)],
        idiom: "english"
    },
    {
        id: 28,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2002</p>)],
        idiom: "english"
    },
    {
        id: 29,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Solutions Specialist</p>)],
        idiom: "english"
    },
    {
        id: 30,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p><em>International professional experience</em> in Madrid. Consultant to <em>prepaid services</em> deployment at Guatemala and El Salvador.</p>)],
        idiom: "english"
    },
    {
        id: 31,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Telefônica Celular*</p>)],
        idiom: "english"
    },
    {
        id: 32,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2000 to 2002</p>)],
        idiom: "english"
    },
    {
        id: 33,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Telecommunications Specialist</p>)],
        idiom: "english"
    },
    {
        id: 34,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Responsible for: highly complex infrastructure <em>engineering project deployment, implementation and integration</em> in mobile network and development of <em>RFPs</em>. <font size="1">*Telefônica Celular is one of the companies that formed the current Vivo.</font></p>)],
        idiom: "english"
    },
    {
        id: 35,
        component: "Skills",
        item: "title",
        totalItem: 1,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h2>Skills</h2>)],
        idiom: "english"
    },
    {
        id: 36,
        component:"Skills",
        item: "Languages",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Languages</h4>)],
        idiom: "english"
    },
    {
        id: 37,
        component:"Skills",
        item: "Languages",
        totalItem: 2,
        numberItem: 1,
        typeItem:"nameLanguage",
        content: [4, (<p>English - fluent</p>), (<p>Spanish - fluent</p>), (<p>German - intermediate</p>), (<p>Portuguese - native</p>)],
        idiom: "english"
    },
    {
        id: 38,
        component:"Skills",
        item: "Main",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Main</h4>)],
        idiom: "english"
    },
    {
        id: 39,
        component:"Skills",
        item: "Main",
        totalItem: 2,
        numberItem: 1,
        typeItem:"mainItems",
        content: [4, (<p><a href="https://mitsloan.credential.getsmarter.com/6b5c48de-90e3-4c3c-8816-79f7c3913ba2#gs.r8cb6z"  target="_blank" rel="noreferrer">MIT AI Business Application</a></p>), (<p><a href="https://bibliotecadigital.fgv.br/dspace/bitstream/handle/10438/350/2142.pdf?sequence=1"  target="_blank" rel="noreferrer">FGV Master Economy</a></p>), (<p>FGV MBA Telecom Management</p>), (<p>UFF Bachelor Telecom Engineering</p>)],
        idiom: "english"
    },
    {
        id: 40,
        component:"Skills",
        item: "Telecom",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Telecom</h4>)],
        idiom: "english"
    },
    {
        id: 41,
        component:"Skills",
        item: "Telecom",
        totalItem: 2,
        numberItem: 1,
        typeItem:"telecomItems",
        content: [4, (<p>Mobile generations (5G/ 4G/ 3G/ 2G)</p>), (<p>Smartcards (Telecom, e-SIM)</p>), (<p>3GPP specifications</p>), (<p>Network protocols (IP, CAMEL)</p>)],
        idiom: "english"
    },
    {
        id: 42,
        component:"Skills",
        item: "More",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>More</h4>)],
        idiom: "english"
    },
    {
        id: 43,
        component:"Skills",
        item: "More",
        totalItem: 2,
        numberItem: 1,
        typeItem:"moreItems",
        content: [4, (<p><a href="https://patents.justia.com/patent/8850463" target="_blank" rel="noreferrer">Patent Portable Devices with Digital TV</a></p>), (<p><a href="https://github.com/paulovicentevalente" target="_blank" rel="noreferrer">Programming Languages<GitHubIcon color="primary" fontSize="medium"/></a></p>), (<p>International Scholarship Germany</p>), (<p><a href="https://www.interaction-design.org/paulo-vicente-dutra-da-silva-santos-valente" target="_blank" rel="noreferrer">Service & Product Design</a></p>)],
        idiom: "english"
    },
    {
        id: 44,
        component: "Navbar",
        item: "experience",
        totalItem: 1,
        numberItem: 0,
        typeItem: "titleMenu",
        content: [1, (<a className="nav-link" href="#experience">Experiência</a>)],
        idiom: "portugues"
    },
    {
        id: 45,
        component: "Navbar",
        item: "skills",
        totalItem: 1,
        numberItem: 0,
        typeItem: "titleMenu",
        content: [1, (<a className="nav-link" href="#skills">Habilidades</a>)],
        idiom: "portugues"
    },
    {
        id: 46,
        component: "Navbar",
        item: "contact",
        totalItem: 1,
        numberItem: 0,
        typeItem: "linkMenu",
        content: [1, (<a className="nav-link" aria-label="Linkedin" href="https://www.linkedin.com/in/paulovicentevalente/?locale=pt_BR" target="_blank" rel="noreferrer"><i className="brands fa-brands fa-linkedin"></i></a>)],
        idiom: "portugues"
    },
    {
        id: 47,
        component: "Navbar",
        item: "subscribe",
        totalItem: 1,
        numberItem: 0,
        typeItem: "linkMenu",
        content: [1, (<a className="nav-link" aria-label="Mailchimp" href="http://eepurl.com/hWW8GL" target="_blank" rel="noreferrer"><i className="brands fa-solid fa-envelope"></i></a>)],
        idiom: "portugues"
    },
    {
        id: 48,
        component: "Navbar",
        item: "idiomMenu",
        totalItem: 1,
        numberItem: 0,
        typeItem: "english",
        content: [1, (<a className="nav-link" href="#english">en</a>)],
        idiom: "portugues"
    },
    {
        id: 49,
        component: "Title",
        item: "message",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myMessage",
        content: [1, (<h1 className="big-heading">Na minha carreira, contribuí para o lançamento de diversos produtos tecnológicos que melhoraram e transformaram significativamente a experiência do cliente.</h1>)],
        idiom: "portugues"
    },
    {
        id: 50,
        component: "Title",
        item: "e-mail",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myE-mail",
        content: [1, (<p className="email">e-mail: paulo@paulovalente.net</p>)],
        idiom: "portugues"
    },
    {
        id: 51,
        component: "Experience",
        item: "title",
        totalItem: 1,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h2>Experiência</h2>)],
        idiom: "portugues"
    },
    {
        id: 52,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://atento.com/pb/" target="_blank" rel="noreferrer">Atento</a></p>)],
        idiom: "portugues"
    },
    {
        id: 53,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2021</p>)],
        idiom: "portugues"
    },
    {
        id: 54,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Superintendente de Gestão de Produto</p>)],
        idiom: "portugues"
    },
    {
        id: 55,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Gestão da equipe de produtos no negócio de Contact Center. Definiu a operação do laboratório com base em <em>métricas de negócios</em> que selecionaram iniciativas que <em>melhoraram os resultados do cliente</em>.</p>)],
        idiom: "portugues"
    },
    {
        id: 56,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.vivo.com.br/" target="_blank" rel="noreferrer">Vivo</a></p>)],
        idiom: "portugues"
    },
    {
        id: 57,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2003 a 2019</p>)],
        idiom: "portugues"
    },
    {
        id: 58,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [4, (<p className="experience-text">Gerente de Gestão de Produtos</p>),
        (<p className="experience-text sub-position">Gerente de Divisão</p>),
        (<p className="experience-text sub-position">Gerente de Especificação Técnica de Dispositivos</p>),
        (<p className = "sub-position">Consultor de Desenvolvimento de Produto</p>)],
        idiom: "portugues"
    },
    {
        id: 59,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescription",
        content: [1, (<p className="experience-text">Gerente da <em>equipe de Desenvolvimento de Produto</em> (engenheiros/ciência da computação):</p>), (<p>Líder da equipe responsável por tecnologia e produtos: <em>novos serviços e produtos com abordagem centrada no cliente</em>, inovação, backlog do produto, <em>análise de trade-offs de design, análise de risco de lançamento</em> , aprimoramento (usabilidade e blueprint), <em>ciclo de vida, roadmap técnico, RFPs, gerenciamento de contratos, manutenção de parcerias</em>, lista de materiais, desenvolvimento de treinamento (atendimento ao cliente e força de vendas), tendências regulatórias, famílias: <em> smartphone/ <a href="https://globoplay.globo.com/v/4880435/" target="_blank" rel="noreferrer">modem</a>/ CPE/ smartcard/ IoT/ M2M</em>, representante do país no seguintes <em>fóruns internacionais</em>: PTCRB, CDG e Telefónica Devices.</p>),(<p className="experience-text">Liderou equipe de <em>Go-to-MKT (multidisciplinar)</em>:</p>),(<p>BTL (Below the line): comunicação de produto e tecnologia (briefing) e apoio interno para a assessoria de imprensa: crise e press release.</p>)],
        idiom: "portugues"
    },
    {
        id: 60,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.uff.br/" target="_blank" rel="noreferrer">Universidade Federal Fluminense</a></p>)],
        idiom: "portugues"
    },
    {
        id: 61,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2008 a 2011</p>)],
        idiom: "portugues"
    },
    {
        id: 62,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Professor Convidado</p>)],
        idiom: "portugues"
    },
    {
        id: 63,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p><em>Professor Convidado</em> MBA de Engenharia e <a href="http://www.telecomuff.com/uploads/6/9/4/8/6948141/especializac%CC%A7a%CC%83o_em_comunicac%CC%A7o%CC%83es_mo%CC%81veis_-_projeto_rj_.pdf" target="_blank" rel="noreferrer">Pós-Graduação</a>. Ministrava aulas de WLAN, Mobile Devices, Core Network, CDMA2000.</p>)],
        idiom: "portugues"
    },
    {
        id: 64,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Telefônica Celular*</p>)],
        idiom: "portugues"
    },
    {
        id: 65,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2002 a 2003</p>)],
        idiom: "portugues"
    },
    {
        id: 66,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Gerente de Soluções</p>)],
        idiom: "portugues"
    },
    {
        id: 67,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Aumentar a <em>retenção</em> por meio do desenvolvimento de <em>soluções customizadas</em> para clientes corporativos. <em>Experiência de gestão remota</em> com equipe em quatro estados do Brasil, <em>gestão de estoque</em>, abordagem <em>orientada para o cliente</em>.  <font size="1">*A Telefônica Celular é uma das empresas que formaram a atual Vivo.</font></p>)],
        idiom: "portugues"
    },
    {
        id: 68,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.movistar.es/" target="_blank" rel="noreferrer">Telefónica Móviles de España</a></p>)],
        idiom: "portugues"
    },
    {
        id: 69,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2002</p>)],
        idiom: "portugues"
    },
    {
        id: 70,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Especialista de Serviços</p>)],
        idiom: "portugues"
    },
    {
        id: 71,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p><em>Experiência profissional internacional</em> em Madrid. Consultor para implantação de <em>serviços pré-pagos</em> na Guatemala e El Salvador.</p>)],
        idiom: "portugues"
    },
    {
        id: 72,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Telefônica Celular*</p>)],
        idiom: "portugues"
    },
    {
        id: 73,
        component: "Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 1,
        typeItem: "date",
        content: [1, (<p className="experience-text">2000 a 2002</p>)],
        idiom: "portugues"
    },
    {
        id: 74,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Especialista de Telecomunicações</p>)],
        idiom: "portugues"
    },
    {
        id: 75,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Responsável por: infraestrutura de alta complexidade <em>implantação, implementação e integração de projeto de engenharia</em> em redes móveis celulares e desenvolvimento de <em>RFPs</em>. <font size="1">*A Telefônica Celular é uma das empresas que formaram a atual Vivo.</font></p>)],
        idiom: "portugues"
    },
    {
        id: 76,
        component: "Skills",
        item: "title",
        totalItem: 1,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h2>Habilidades</h2>)],
        idiom: "portugues"
    },
    {
        id: 77,
        component:"Skills",
        item: "Languages",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Idiomas</h4>)],
        idiom: "portugues"
    },
    {
        id: 78,
        component:"Skills",
        item: "Languages",
        totalItem: 2,
        numberItem: 1,
        typeItem:"nameLanguage",
        content: [4, (<p>Inglês - fluente</p>), (<p>Espanhol - fluente</p>), (<p>Alemão - intermediário</p>), (<p>Português - nativo</p>)],
        idiom: "portugues"
    },
    {
        id: 79,
        component:"Skills",
        item: "Main",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Principal</h4>)],
        idiom: "portugues"
    },
    {
        id: 80,
        component:"Skills",
        item: "Main",
        totalItem: 2,
        numberItem: 1,
        typeItem:"mainItems",
        content: [4, (<p><a href="https://mitsloan.credential.getsmarter.com/6b5c48de-90e3-4c3c-8816-79f7c3913ba2#gs.r8cb6z"  target="_blank" rel="noreferrer">MIT AI Business Application</a></p>), (<p><a href="https://bibliotecadigital.fgv.br/dspace/bitstream/handle/10438/350/2142.pdf?sequence=1"  target="_blank" rel="noreferrer">FGV Mestrado Economia</a></p>), (<p>FGV MBA Gestão Telecom</p>), (<p>UFF Engenharia Telecom</p>)],
        idiom: "portugues"
    },
    {
        id: 81,
        component:"Skills",
        item: "Telecom",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Telecom</h4>)],
        idiom: "portugues"
    },
    {
        id: 82,
        component:"Skills",
        item: "Telecom",
        totalItem: 2,
        numberItem: 1,
        typeItem:"telecomItems",
        content: [4, (<p>Gerações Celulares (5G/ 4G/ 3G/ 2G)</p>), (<p>Smartcards (Telecom, e-SIM)</p>), (<p>Especificações 3GPP</p>), (<p>Protocolos de Rede (IP, CAMEL)</p>)],
        idiom: "portugues"
    },
    {
        id: 83,
        component:"Skills",
        item: "More",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Mais</h4>)],
        idiom: "portugues"
    },
    {
        id: 84,
        component:"Skills",
        item: "More",
        totalItem: 2,
        numberItem: 1,
        typeItem:"moreItems",
        content: [4, (<p><a href="https://patents.justia.com/patent/8850463" target="_blank" rel="noreferrer">Patente Celulares com TV Digital</a></p>), (<p><a href="https://github.com/paulovicentevalente" target="_blank" rel="noreferrer">Linguagens Programação<GitHubIcon color="primary" fontSize="medium"/></a></p>), (<p>Bolsa CAPES Alemanha</p>), (<p><a href="https://www.interaction-design.org/paulo-vicente-dutra-da-silva-santos-valente" target="_blank" rel="noreferrer">Design de Serviços e Produtos</a></p>)],
        idiom: "portugues"
    },
    {
        id: 85,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.tim.com.br/" target="_blank" rel="noreferrer">TIM</a></p>)],
        idiom: "portugues"
    },
    {
        id: 86,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2022 até o momento</p>)],
        idiom: "portugues"
    },
    {
        id: 87,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Especialista de Produtos</p>)],
        idiom: "portugues"
    },
    {
        id: 88,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Responsável pelo Produto de <em>Plataformas IoT</em> na Diretoria de Marketing <em>IoT & 5G</em>.</p>)],
        idiom: "portugues"
    },
    {
        id: 89,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.tim.com.br/" target="_blank" rel="noreferrer">TIM</a></p>)],
        idiom: "english"
    },
    {
        id: 90,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2022 to date</p>)],
        idiom: "english"
    },
    {
        id: 91,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Product Specialist</p>)],
        idiom: "english"
    },
    {
        id: 92,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>As <em>Product Manager</em>, I am responsible for <em>IoT Platforms</em> at Marketing <em>IoT & 5G</em> Directory.</p>)],
        idiom: "english"
    },
    {
        id: 93,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://gamersafer.com/" target="_blank" rel="noreferrer">GAMERSAFER</a></p>)],
        idiom: "portugues"
    },
    {
        id: 94,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2020</p>)],
        idiom: "portugues"
    },
    {
        id: 95,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Parceiro de Negócios</p>)],
        idiom: "portugues"
    },
    {
        id: 96,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Conectar a Gamersafer com as operadoras móveis brasileiras e promover solução de White Label de <em>Campeonatos Esports</em>.</p>)],
        idiom: "portugues"
    },
    {
        id: 97,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://gamersafer.com/" target="_blank" rel="noreferrer">GAMERSAFER</a></p>)],
        idiom: "english"
    },
    {
        id: 98,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2020</p>)],
        idiom: "english"
    },
    {
        id: 99,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Business Partner</p>)],
        idiom: "english"
    },
    {
        id: 100,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Connect Gamersafer with Brazilian mobile operators and promote White Label <em>Esports Championship</em> Solution.</p>)],
        idiom: "english"
    },
    {
        id: 101,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Parceria com <a href="https://www.linkedin.com/in/vera-bier-6a9602/" target="_blank" rel="noreferrer">Bier Innovation & Technology Consulting and Services</a></p>)],
        idiom: "portugues"
    },
    {
        id: 102,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2019 a 2020</p>)],
        idiom: "portugues"
    },
    {
        id: 103,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Parceiro de Negócios</p>)],
        idiom: "portugues"
    },
    {
        id: 104,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Trazer para o mercado brasileiro soluções de <em>inteligência artificial</em> para apoiar <em>decisões jurídicas</em>. Produziu avaliação de segmentos de negócios, mapeamento do ambiente jurídico brasileiro, seleção de soluções/parceiros e geração de <em>leads</em>.</p>)],
        idiom: "portugues"
    },
    {
        id: 105,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Partnership with <a href="https://www.linkedin.com/in/vera-bier-6a9602/" target="_blank" rel="noreferrer">Bier Innovation & Technology Consulting and Services</a></p>)],
        idiom: "english"
    },
    {
        id: 106,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2019 to 2020</p>)],
        idiom: "english"
    },
    {
        id: 107,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Business Partner</p>)],
        idiom: "english"
    },
    {
        id: 108,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Bring to the Brazilian market <em>artificial intelligence</em> solutions to support <em>legal decisions</em>. Produced business segment evaluation, Brazilian legal environment mapping, solution/partner selection, and <em>lead</em> generation.</p>)],
        idiom: "english"
    },

];

export default htmlTextsEnglish;