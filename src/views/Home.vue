<template>
  <v-container>
    <!-- Call to action buttons -->
    <v-row>
      <v-col>
        <v-row justify="center">
          <v-btn class="info ma-1" to="/meetups" depressed large>
            Explore Meetups
          </v-btn>
          <v-btn class="info ma-1" to="/organize-meetup" depressed large>
            Organize Meetups
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <!-- Carousel -->
    <v-row>
      <v-col>
        <v-carousel style="cursor: pointer">
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            reverse-transition="fade-transition"
            transition="fade-transition"
            @click="onSelectMeetup(meetup.id)"
          >
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Call to action message -->
    <v-row>
      <v-col>
        <v-row justify="center">
          <p>Join any one of our awesome meetups!</p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      meetups: [
        {
          ids: '7K7aaC4cpxyEw4NW',
          id: 1,
          title: 'Meetup in New York',
          location: 'Times Square',
          date: '2020-07-25',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo debitis maiores hic dignissimos voluptatem. totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Explicabo debitis maiores hic dignissimos voluptatem.totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.',
        },
        {
          ids: 'WHfXpbuT2dNafmZ3',
          id: 2,
          title: 'Meetup in Nairobi',
          location: 'Nairobi Garage, Kilimani',
          date: '2020-07-26',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nairobi_skyline_P1000021.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo debitis maiores hic dignissimos voluptatem. totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Explicabo debitis maiores hic dignissimos voluptatem.totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.',
        },
        {
          ids: 'aqwkN2PShdDhTwTw',
          id: 3,
          title: 'Meetup in London',
          location: 'Tower Bridge',
          date: '2020-07-30',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/2/2c/Tower_of_London_viewed_from_the_River_Thames.jpg',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo debitis maiores hic dignissimos voluptatem. totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Explicabo debitis maiores hic dignissimos voluptatem.totam harum eaque veritatis voluptate iste, asperiores iusto neque eius inventore, exercitationem, deleniti labore blanditiis nam.',
        },
      ],
    };
  },
  methods: {
    onSelectMeetup(id) {
      this.$router.push('/meetups/' + id);
    },
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  margin: 0;
  margin-right: -50%;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 21px;
  padding: 21px;
}
</style>
