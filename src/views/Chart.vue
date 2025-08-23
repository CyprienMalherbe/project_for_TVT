<script>
export default {
  name: 'Chart',
  data() {
    return {
      team: [
        {
          name: 'Alice Dupont',
          role: 'Directrice',
          email: 'alice.dupont@example.com',
          image: 'https://i.pravatar.cc/150?img=1'
        },
        {
          name: 'Bob Martin',
          role: 'Responsable communication',
          email: 'bob.martin@example.com',
          image: 'https://i.pravatar.cc/150?img=2'
        },
        {
          name: 'Claire Leroy',
          role: 'Chargée de projet',
          email: 'claire.leroy@example.com',
          image: 'https://i.pravatar.cc/150?img=3'
        },
        {
          name: 'David Petit',
          role: 'Trésorier',
          email: 'david.petit@example.com',
          image: 'https://i.pravatar.cc/150?img=4'
        },
        {
          name: 'Emma Durand',
          role: 'Secrétaire',
          email: 'emma.durand@example.com',
          image: 'https://i.pravatar.cc/150?img=5'
        },
        {
          name: 'François Martin',
          role: 'Chargé logistique',
          email: 'francois.martin@example.com',
          image: 'https://i.pravatar.cc/150?img=6'
        },
      ]
    }
  }
}
</script>
<template>
  <div class="chart-container">
    <h2 class="chart-title">Notre Bureau</h2>
    <div class="cards-wrapper">
      <div v-for="(member, index) in team" :key="index" class="team-card">
        <div class="avatar">
          <img :src="member.image" :alt="member.name" />
        </div>
        <div class="info">
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
          <p class="email">{{ member.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chart-container {
  max-width: 70vw;
  margin: 2rem auto;
  text-align: center;
}

.chart-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: white;
  padding-top: 7vh;
}

.cards-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
}

.team-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  width: 220px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #007BFF;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
  color: #222;
}

.info .role {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.info .email {
  font-size: 0.9rem;
  color: #888;
  word-break: break-all;
}
</style>
