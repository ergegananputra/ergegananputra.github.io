document.addEventListener('DOMContentLoaded', function() {
    var carouselTrackLanguage = document.getElementById('carousel_track_language');
    var clone = carouselTrackLanguage.cloneNode(true);
    clone.className = 'carousel__track--2';
    carouselTrackLanguage.parentNode.appendChild(clone);
});


function createProject(year, thumbnailSrc, title, subtitle, description, id) {
    return `
        <div class="project mt-4">
            <div class="row flex-container">
                <div class="col-4">
                    <div class="time">
                        ${year}
                    </div>
                </div>
                <div class="col-8 wrapper">
                    <div class="image">
                        <img class="thumbnail" 
                            src="${thumbnailSrc}" 
                            alt="thumbnail"
                            onclick="toggleDescription('description${id}')" />
                        <div class="description" id="description${id}">
                            <h2 class="thumbnail-title" id="tt-${id}">${title}</h2>
                            <p class="thumbnail-subtitle" id="tst-${id}">${subtitle}</p>
                            <p class="thumbnail-text" id="ttext-${id}">${description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

var projectList = [
    createProject (
        'May, 2024',
        './assets/images/thumbnails/BIN-GO.png',
        'BIN-GO',
        'Android Application',
        `
        BIN-GO! is a mobile application developed to address the waste crisis in Yogyakarta. The app integrates the location of waste recycling centers through Google Maps, so users can easily access the nearest recycling facilities. In addition, the app is also equipped with a forum where people can discuss and share insights on waste management topics, thus fostering a sense of shared responsibility.
                                            <br><br>
                                            The latest addition to BIN-GO! is the report feature, which allows users to report various waste-related issues, such as littering in the neighborhood. This empowers users to take an active role in identifying and addressing environmental challenges within their communities.
                                            <br><br>
                                            In addition, BIN-GO! incorporates gamification elements to encourage user participation in sustainable behavior. Through challenges and rewards, users are motivated to adopt green practices and contribute to a cleaner environment.
                                            <br><br>
                                            By empowering users with information, facilitating community interaction, and gamifying sustainable behaviors, BIN-GO! strives to promote responsible waste management, disposal, and waste management practices and contribute to a cleaner and greener Yogyakarta.
        `
        
    ),
    createProject (
        'March, 2024',
        './assets/images/thumbnails/Propertio Developer.png',
        'Propertio Developer',
        'Android Application',
        `
        PropertiO Developer Android App is a comprehensive property project management and information platform tailored for property developers. This application aims to assist developers in efficiently managing and marketing their property projects to PropertiO users. The primary target audience for this app is housing developers looking to sell units from their housing projects and provide development updates to PropertiO users.
Developers and PropertiO users can seamlessly access the application by logging in with their pre-registered accounts, streamlining the authentication process. The user interface is specifically designed for housing developers and is compatible with any platform or operating system that supports Android-based applications
        `
    ),
    createProject (
        'Feb, 2024',
        './assets/images/thumbnails/Todo Planner _ Education Edition.png',
        'TODO PLANNER : Education Edition',
        'Android Application',
        `
        This student planner app helps you manage your academic life by creating detailed schedules, setting reminders for quizzes and assignments, and allowing easy rescheduling. Firebase keeps your notes and schedule synced across devices, while SQLite handles local data. Built for Android, the app utilizes Git for secure version control and collaboration, offering a user-friendly experience to streamline your studies. 
        `
    )
]

var projectContainer = document.getElementById('project-lists');
projectList.forEach(function(project) {
    projectContainer.innerHTML += project;
});