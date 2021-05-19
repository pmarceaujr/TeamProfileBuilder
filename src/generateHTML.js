const generateTeam = team => {
    const generateManager = manager => {
        return `
        <section class='manager col-2  mt-4 mb-1'>
       <div class="card border-primary mx-1 shadow ">
            <div class="card-body text-primary card-header">
                <h4>Manager: ${manager.getName()}</h4>
            </div>
            <div class="card-body text-secondary">
            <h5 class="card-title">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></h5>
            <h5 class="card-title">Employee ID: ${manager.getId()}</h5>
            <h5 class="card-title">Office #: ${manager.getOfficeNumber()}</h5>
            </div>
            </div>
        </section>`
    }
    const generateEngineer = engineer => {
        return `
        
        <div class="card border-primary mx-1 shadow ">
            <div class="card-body text-primary card-header">
                <h4>Engineer: ${engineer.getName()}</h4>
            </div>
            <div class="card-body text-secondary">
              <h5 class="card-title">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></h5>
              <h5 class="card-title">Employee ID: ${engineer.getId()}</h5>
              <h5 class="card-title">Github: <a href="https://www.github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></h5>
          </div>
          </div>`
    }
    const generateIntern = intern => {
        return `
        
        <div class="card border-primary mx-1 shadow ">
            <div class="card-body text-primary card-header">
                <h4>Intern: ${intern.getName()}</h4>
            </div>
            <div class="card-body text-secondary">
              <h5 class="card-title">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></h5>
              <h5 class="card-title">Employee ID: ${intern.getId()}</h5>
              <h5 class="card-title">School: ${intern.getSchool()}</h5>
          </div>
          </div>`
    }
    /*let html = '';
    html = html + (team.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));
    html = html + (team.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)));
    html = html + (team.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)));*/
    const html = [];
    html.push(team.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager)));
    html.push("<section class='engineer  d-flex flex-row ' >")
    html.push(team.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)).join(''));
    html.push("</section>")
    html.push("<section class='intern  d-flex flex-row ' >")
    html.push(team.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)).join(''));
    html.push("</section>")
    console.log(team)
    console.log(html)
    return html.join('');

    //return html
}
module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
  <header>
  <div class="jumbotron-fluid d-flex justify-content-center">
    <h2>The Best Development Team Ever Created</h2>
</div>
    </header>
  <main>
  <div class='container-fluid  d-flex align-items-center flex-column'>
     ${generateTeam(team)}
     </div>
  </main>
    <script src='../index.js'></script>
</body>
</html>`;
}