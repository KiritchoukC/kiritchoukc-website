<template>
  <v-row justify="center" align="center">
    <v-col :cols="$breakpoint.is.smAndUp ? 6 : 12">
      <p class="display-1">Projects history</p>
      <p class="subtitle-2 grey--text text--darken-1">
        All the projects I've been involved with during my career
      </p>

      <v-timeline dense>
        <template v-for="(item, i) in data">
          <v-timeline-item :key="'year-' + i" color="transparent" hide-dot>
            <span class="grey--text text--darken-5 display-1">{{
              item.year
            }}</span>
          </v-timeline-item>

          <v-timeline-item
            v-for="(project, j) in item.projects"
            :key="item.year + '-project-' + j"
            small
            color="accent"
          >
            <v-card>
              <v-chip
                v-if="!$breakpoint.is.smAndUp"
                small
                pill
                color="accent lighten-2"
                style="position: absolute; top:-12px; right:0;"
                >{{ project.tag }}</v-chip
              >
              <v-list-item four-line>
                <v-list-item-content class="align-self-start">
                  <v-list-item-title
                    class="headline mb-2"
                    style="white-space: unset"
                    >{{ project.title }}</v-list-item-title
                  >

                  <v-list-item-subtitle
                    style="white-space: unset"
                    v-text="project.subtitle"
                  ></v-list-item-subtitle>
                  <span
                    class="mt-3 description"
                    v-html="project.description"
                  ></span>
                  <span v-if="project.source" class="mt-2 caption">
                    Source:
                    <a
                      :href="project.source.url"
                      :alt="project.source.alt"
                      :title="project.source.title"
                      aria-label="Go to project's source"
                      >{{ project.source.url }}</a
                    >
                  </span>
                </v-list-item-content>

                <v-list-item-avatar v-if="$breakpoint.is.smAndUp" size="125">
                  <v-img :src="project.src"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-timeline-item>
        </template>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'Projects'
    }
  },
  data() {
    return {
      data: [
        {
          year: '2019',
          projects: [
            {
              tag: 'Personal',
              title: 'Kiritchouk Clément Website',
              subtitle: 'Personal website',
              description: `This is the website you're on, this is made with <a href="https://vuejs.org/" target="_blank">Vue</a> and the <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>
              framework. <br />
              The website, the nginx reverse proxy and the https encryption are in containers. <br />
              Containers are hosted on a <a href="https://www.vultr.com/" target="_blank">Vultr</a> Ubuntu virtual private server`,
              src: '/media/logo_128px.webp',
              source: {
                url: 'https://github.com/KiritchoukC/kiritchoukc',
                alt: 'Github kiritchoukc repository',
                title: 'Go to github repository'
              }
            },
            {
              tag: 'Eurotunnel',
              title: 'Front-end tasks',
              subtitle: 'Fixes and new features on Front-end',
              description: `Using <a href="https://angularjs.org/" target="_blank">AngularJs</a>, I've added some features and fixed little anomalies.`,
              src:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo-Eurotunnel.jpg/600px-Logo-Eurotunnel.jpg'
            },
            {
              tag: 'Eurotunnel',
              title: 'Services Refactoring',
              subtitle:
                'Refactoring some services to increase speed and maintainability',
              description: `Old services needed an update. I've added caching, refactored for readability and increased consistency with the other newer services`,
              src:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo-Eurotunnel.jpg/600px-Logo-Eurotunnel.jpg'
            },
            {
              tag: 'Eurotunnel',
              title: 'Database migration',
              subtitle: 'Migrating some services from Oracle to SQL Server',
              description: `I did the migration of some services from Oracle to SQL server.
              For that, i've built DTSX package, updated code base and SQL queries`,
              src:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo-Eurotunnel.jpg/600px-Logo-Eurotunnel.jpg'
            }
          ]
        },
        {
          year: '2018',
          projects: [
            {
              tag: 'Eurotunnel',
              title: 'Mission anomalies Api',
              subtitle: "Building a .NET Api managing mission's anomalies",
              description: `I've built an Api that manages anomalies on every missions. <bvr/>
              This service automatically creates anomaly when some criterias are met`,
              src:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo-Eurotunnel.jpg/600px-Logo-Eurotunnel.jpg'
            },
            {
              tag: 'Eurotunnel',
              title: 'Mission notes Api',
              subtitle: "Building a .NET Api managing mission's notes",
              description: `I've built an Api holding all the mission notes, manual and automatic ones`,
              src:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo-Eurotunnel.jpg/600px-Logo-Eurotunnel.jpg'
            },
            {
              tag: 'Eurotunnel',
              title: 'Mission tracking Api',
              subtitle: 'Building a .NET Api that reacts to marker events',
              description: `There's marker on railway triggering everytime a train passes over. <br/>
              On top of that, I've built an Api reacting to these events and automatically start, stop or declare a mission arrived.`,
              src:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo-Eurotunnel.jpg/600px-Logo-Eurotunnel.jpg'
            }
          ]
        },
        {
          year: '2017',
          projects: [
            {
              tag: 'Eurotunnel',
              title: 'Mobile app Api',
              subtitle: 'Building a .NET Api for a mobile application',
              description: `I've built an Api serving a Xamarin mobile app that alerts user of everything happening on the site.<br/>
              The Api was subscribing to alert messages and then pushing notification to the mobile app after keeping an history of the alerts received in database
              I've used <a href="https://jwt.io/">Jwt</a> to authenticate users and then get their alerts based on the category they subscribed to.`,
              src:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo-Eurotunnel.jpg/600px-Logo-Eurotunnel.jpg'
            },
            {
              tag: 'Eurotunnel',
              title: 'Micro-services management',
              subtitle: 'Building a micro-services management solution',
              description: `I've built an MVC solution to manage all the micro-services.<br />
              I've used the <a href="https://manage.iis.net/" target="_blank">IIS Administration Api</a> to get all the applications of the server with the relevant data (CPU load, memory, ...).<br />
              Applications could be stopped, started and restarted via the interface.<br/>
              You can see live logs of every applications with the help of <a href="https://github.com/aspnet/SignalR" target="_blank">SignalR</a>.<br/>
              There's also a dependency graph built with <a href="https://d3js.org/" target="_blank">D3js</a>.<br/>
              The front was made with <a href="https://knockoutjs.com/" target="_blank">KnockoutJS</a>, <a href="https://vuejs.org/" target="_blank">Vue</a> and <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>`,
              src:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo-Eurotunnel.jpg/600px-Logo-Eurotunnel.jpg'
            },
            {
              tag: 'Divotiz',
              title: 'Tim Mobile',
              subtitle: 'ERP Solution mobile app',
              description: `Done with <a href="https://angular.io/" target="_blank">Angular</a>, this is the mobile version of Tim ERP Solution`,
              src: '/media/divotiz.webp'
            },
            {
              tag: 'Eurotunnel',
              title: 'RabbitMQ Message bus',
              subtitle:
                'Publishing/Subscribing messages between micro-services',
              description: `To add reactivity to the application, the solution needed a way to update data asynchronously between micro-services.
              I replaced synchronous api calls by <a href="https://www.rabbitmq.com/" target="_blank">RabbitMQ</a> Message bus.`,
              src:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo-Eurotunnel.jpg/600px-Logo-Eurotunnel.jpg'
            },
            {
              tag: 'Divotiz',
              title: 'Tim',
              subtitle: 'ERP Solution',
              description: `This is the first official project I've worked on. <br />
              It's an ERP solution based on <a href="https://dotnet.microsoft.com/apps/aspnet/mvc" target="_blank">ASP.NET MVC</a> technology with the <a href="https://docs.microsoft.com/en-us/dotnet/architecture/micro-services/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design#the-repository-pattern" target="_blank">repository pattern</a>.<br />
              Front-end is made with <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> framework and <a href="https://knockoutjs.com/" target="_blank">KnockoutJS</a>.`,
              src: '/media/divotiz.webp'
            }
          ]
        }
      ]
    }
  },
  transition: {
    name: 'fade'
  }
}
</script>

<style lang="scss">
.description {
  line-height: 1.5;
}
</style>
