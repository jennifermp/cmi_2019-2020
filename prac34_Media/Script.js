function Movie_OnStart(){
StackTrace="Al Iniciar";
VideoSetVolume("JACK",0);

}

function Frame__0_0(ID){
StackTrace="Escena 1 Fotograma 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Escena 2 Fotograma 0";
Pause();



}

function HotSpot1_OnClick(){
StackTrace="HotSpot1.Al Hacer Clic";


}

function HotSpot1_OnOver(){
StackTrace="HotSpot1.Al Pasar";
VideoCanPlay("mp4");

}

function ToggleButton1_OnClick(){
StackTrace="ToggleButton1.Al Hacer Clic";
VideoSetVolume("JACK",100);
SoundPlay("pop", false);

}

function ToggleButton1_OnRelease(){
StackTrace="ToggleButton1.Al Liberar";
VideoSetVolume("JACK",0);
SoundPlay("pop", false);
}

function ToggleButton2_OnClick(){
StackTrace="ToggleButton2.Al Hacer Clic";
VideoPause("JACK");
SoundPlay("pop", false);

}

function ToggleButton2_OnRelease(){
StackTrace="ToggleButton2.Al Liberar";
VideoResume("JACK");
SoundPlay("pop", false);
}

function Button1_OnClick(){
StackTrace="Button1.Al Hacer Clic";
GotoSceneName("Scene2");
SoundPlay("pop", false);

}

function Button1_OnRelease(){
StackTrace="Button1.Al Liberar";
SoundPlay("pop", false);
}

function Button2_OnClick(){
StackTrace="Button2.Al Hacer Clic";
GotoSceneName("Scene1");
SoundPlay("pop", false);

}

function musica_OnClick(){
StackTrace="musica.Al Hacer Clic";
SoundResume('gaze', false);
SoundPlay("pop", false);

}

function musica_OnRelease(){
StackTrace="musica.Al Liberar";
SoundPause("gaze", true);
SoundPlay("pop", false);
}

function musica_OnOut(){
StackTrace="musica.Al Salir";


}

