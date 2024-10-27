+++
title = "Mobility Data Summit 2024"
slug = "summit"
+++


Thank you for taking the interest on the open-source work I have been collaborating in the past years!
Here is a collection of the material I showed on me slidedeck:

# R Packages

At IPEA, while working on [Access to Opportunities project](/experience/#experience_ipea), I collaborated extensively on developing R packages that utilize GTFS data. For some packages, I contributed directly to the coding phase, and for all, I actively participated in discussions, suggested improvements, and reported bugs.

<a href="https://www.ipea.gov.br/acessooportunidades/software/" target="_blank" style="text-decoration: none;">
<button class="button">
    Access the suite of R packages
  </button>
</a>


In addition, I have started developing my own R packages. One package currently in development is `gps2gtfs`, which uses public transport GPS data to correct GTFS feeds based on scheduled data. This package applies the method I developed in [this paper](https://www.sciencedirect.com/science/article/pii/S0966692323000625) as part of my PhD research.

<a href="https://github.com/kauebraga/gps2gtfs" target="_blank" style="text-decoration: none;">
<button class="button">
    <i class="fab fa-github" style="margin-right: 8px;"></i> gps2gtfs
  </button>
</a>

# Web applications

I have also developed a number of web applications (using the [R Shiny framework](https://shiny.posit.co/)) that used different type of public transport data (such as GTFS, smartcard, GPS), such as:

<div class="container1" id="apps_galery">
    
<a href="https://kauebraga.shinyapps.io/sitfor_linhas/" style="text-decoration: none;">
<div class="box1 button1" id="teste_hover">
        <img src="/images/app_sitfor.png" alt="App Sitfor" style="height:200px">
        <div class="w3-container w3-white" style="height: 230px;">
          <h3>Fortaleza's (Brazil) Public Transport System (SIT-FOR)</h3>
          <p style="font-size: 16px; font-weight:400">Shinyapp with routes, bus lines and general information about SIT-FOR</p>
        </div>
      </a>
    </div>
    
        
<a href="https://apps.kauebraga.dev/gtfs_explorer/" style="text-decoration: none;">
<div class="box1 button1" id = "teste_hover5">
      <img src="/images/app_gtfs.png" alt="GTFS Explorer" style="height:200px">
      <div class="w3-container w3-white" style="height: 230px;">
      <h3>GTFS Explorer (beta)</h3>
      <p style="font-size: 16px; font-weight:400">Explore GTFS feeds: routes, trips, speeds</p>
    </div>
      </a>
    </div>
    
</div>


<a href="/projects/#interactive-webapps" target="_blank" style="text-decoration: none;">
<button style="background-color: white; color: black; padding: 10px 20px; border: 2px solid black; border-radius: 5px; font-size: 16px; cursor: pointer;">
    Check my full portfolio of web applications
  </button>
</a>
