# Dictionaire
Tetra = Tetremino = Piece : tous font refernce a un meme element
# Taches pour la realisation du projets TETRIS
<!-- 1 - Cree une class qui vas represente les tetrominaux
    - Proprietes :
      - x = position x du tetra
      - y = position y du tetra
      - tetremino : tableau a deux niveaux pour indique le tetrominos qui sera dessine
        - Exemple :
           [
            [1,1,1],
            [1,0,0],
            [1,0,0],
           ]
      - Une methode Draw qui vas dessiner le tetromino
      - Une methode Rotate qui vas gere les rotations du tetromino
      - Une methode Colider cette metholde vas empeche que sur l'axe X, le tetra ne sorte de l'ecrant pour cela une boucle vas parcourire le tableau this.tetremino et vas verifie si l'item du tableau est dessiner(les iteme dessine sont ceux avec 1 dans la tableau) si oui, on verifie si les case sur X qui son a cote de lui sont dessiner si oui on empeche les deplacement sur X.
      Et sur l'axe Y cette methode vas verifie si les item de this.tetremino touch la derniere la ligne ou si il sont en contact avec une case dessine alors le tetra sera supprimer dans le tableau *current_tetras (tout les tetras qui seront dans ce tableau seront controller par le joueur)
      - Une methode Freeze cette methode vas affiche le tableau this.tetromino dans le tableau borad (ce tableau c'est la table du jeu a l'interieur on sauras si une ligne a ete remplis ou si les tetras touchent le haut de l'ecrant, c'est un peut la partie invisible du canvas qui servira a voir les tetras alors le borad on verra tableau de tableau avec 1 pour montre que le pixel X a la position Y est dessiner et 0 pour indiquer que rien n'est dessiner) -->

<!-- 2 - Un tableau current
  - Dans ce tableau on auras le tetras qui dois etre controller par je joueur, une fois le tetra en collision, on retire le teras du tableau et on ajoute un nouveau -->

<!-- 3 - Un tableau Board ce tableau vas represente notre element html canvas il nous permettras de connais si les tetras sont en colision avec les autres ou si une ligne est pleine ou si le joueur as perdu c'est dans ce tableau qu'on vas ajoute tout les tetras et les dessines, une fois l'utilisateur remplis une ligne on supprime la ligne et on ajoute une niuvelle en haut. -->

<!-- 4 - Une fonctio d'animation qu'on peut mettre en pause ou paly quand on veux (Terminee) -->
<!-- 5 - Une fonction de mise a jour (update) (Terminee) -->
<!-- 5 - Une fonction draw qui vas dessine les element du jeu -->
<!-- 6 - Cree un systeme de controlle (deplacement,rotation et descente rapide) (Terminee) -->
<!-- 7 - Cree les deplacement d'une piece (gauche,droit,rotation) : (Terminee) -->
<!-- 8 - Ajout et mise a jour automatique des valeur du tableau board (une fois le joueur se deplace le tableau board doit etre a jour avec les nouvelle donee) : a faire apres les deplacement (Terminee) -->
<!-- 9 - Gere les collision d'un tetra (evite qu'il sort du jeu,le supprimer de la table currentTetra et ajoute c'est donnees dans la table board une fois il touche le sol) (Terminer) -->
<!-- 10 - Annimation de descente du tetra une fois le tetra touche le sol on le suprime de la table currentTetra et on ajoute un autre ou se trouve tout les tetras du jeux -->
<!-- 11 - Commence a ajoute plusieurs tetra dans le jeu -->
<!-- 12 - Gere les colision entre les tetras -->
<!-- 13 - Descente rapide des tetras -->
<!-- 14 - Supprimer les lignes pleine -->
<!-- 15 - Avoir la possibilite de voir le prochain tetra -->
<!-- 16 - Ajout du Game Over (meme une fonction qui restar le jeu feras l'affaire) -->
17 - Rotation inverse
18 - cree des fonction pour les diffrent action du jeu :
     - Rotation inverse
     - Descente rapide
19 - Cree une fonction aplayEvent qui prendras une liste de key.code,une fonction callback et le key.code sur le quel l'utilisateur a cliquer si le code est dans la liste appeler la fonction callback
18 -  ajoute tout les evenements (pc)
19 - ajoute les sons
20 - Ajoute le logo

-- Function qui prendras une liste de key.code et vas tous les applique une meme action --
