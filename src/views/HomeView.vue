<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const play = () => {
router.push('play')
};

</script>

<template>
  <el-container>
    <el-main>
      <div class="main">
        <el-button type="primary" size="large" class="button" @click="play">
          Jouer
        </el-button>
        <h3 class="title">Déroulement d'une partie</h3>
        <ol>
          <li>Une liste chronologique d'évènements sera proposée à votre gauche</li>
          <li>Appuyez sur le marqueur de la carte où vous croyez que l'action sélectionnée a eu lieu</li>
          <li>Votre nombre d'erreurs augmentera pour chaque fausse réponse</li>
          <li>Faites de même pour chaque évènement</li>
        </ol>
        <h3 class="title">Notes</h3>
        <ol>
          <li>Un marqueur peut être utilisé a plusieurs reprises</li>
          <li>Sur smartphone, vous pouvez appuyer longuement sur un marqueur pour révéler son nom</li>
        </ol>
        <h3 class="title">Amusez vous bien!</h3>
      </div>
    </el-main>
    <el-footer class="footer">
      Réalisé par <el-link class="link" href="https://github.com/MarcHamamji/" type="primary">Marc Hamamji</el-link>
      <br/>
      Le code est disponible <el-link class="link" href="https://github.com/MarcHamamji/manon-lescaut" type="primary">ici</el-link>
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  .button {
    font-size: 22px;
  }

  .title {
    margin: 18px 0px 8px 0px;
  }

  ol {
    margin: 0;

    li::marker {
      font-weight: bold;
    }
  }
}

.footer {
  text-align: center;

  .link {
    vertical-align: text-bottom;
    font-size: 16px;
  }
}
</style>
