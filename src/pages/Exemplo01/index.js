import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Heart2 from "../../components/Heart2";
import "./styles.scss";

const Exemplo01 = () => {
  return (
    <>
      <div className="containerElixir">
        <h1 className="title">Elixir do Amor</h1>
        <h2 className="subtitle">cada gota guarda uma história de amor</h2>
        <Canvas
          camera={{ position: [0, 0, 600], fov: 50 }}
          gl={{ alpha: true }}
          id="poisson"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={() => <h1>carregando...</h1>}>
            <Heart2 />
          </Suspense>
          <OrbitControls
            enableRotate={true}
            enableZoom={false}
            enablePan={false}
            minPolarAngle={1.5}
            maxPolarAngle={false}
          />
        </Canvas>
        <p className="paragraph">
          Sabe aquela sensação de guardar algo precioso em um lugar seguro? É
          como se pudéssemos engarrafar momentos e emoções, preservando cada
          detalhe em um frasco encantado. Imagine um coração em um frasco, uma
          poção do amor que guarda todos os sentimentos mais puros e sinceros.
          Parece mágico, né? Pois é, a vida é cheia desses pequenos encantos que
          às vezes a gente nem percebe. O amor, quando verdadeiro, é como um
          elixir dos enamorados, transformando os momentos mais simples em
          memórias inesquecíveis. Já parou pra pensar em quantas histórias estão
          guardadas dentro de você? Cada lembrança é uma gota dessa poção, cada
          sorriso, cada lágrima, cada abraço. Tudo isso compõe a essência do
          nosso ser, nosso próprio coração em frasco. E se a gente pudesse pegar
          todas essas lembranças e sentimentos e colocar em um frasco de amor,
          onde a magia acontece? Seria incrível ter um lugar onde todas as
          nossas emoções fossem protegidas, onde pudéssemos visitar sempre que
          quiséssemos reviver um pouco do passado. Afinal, o amor em vidro é
          frágil, mas também é forte, porque guarda aquilo que temos de mais
          precioso. Desvendar o segredo do coração é entender que cada um tem
          sua própria fórmula do amor. Não existe receita pronta, cada um
          mistura os ingredientes de um jeito único e especial. No fim, o que
          importa é a alquimia que acontece dentro de nós, aquela magia que
          transforma momentos simples em histórias eternas. Então, que tal
          começar a valorizar mais essas pequenas poções do dia a dia? O amor
          está nos detalhes, nas pequenas coisas que às vezes passam
          despercebidas. Vamos guardar cada momento com carinho, como se
          estivéssemos engarrafando um pouco de felicidade. Afinal, o coração é
          um verdadeiro guardião dos sentimentos, e merece ser tratado com toda
          a delicadeza do mundo.
        </p>
      </div>
    </>
  );
};

export default Exemplo01;
