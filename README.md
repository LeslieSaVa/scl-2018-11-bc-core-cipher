# Introducción
CipherText es una aplicación para mantener una conversación privada/secreta con
tus amigos, familia o quien tu quieras y que solo uds puedan descifrar. CipherText aumenta la seguridad de tus mensajes mediante la codificación del contenido, de manera que solo pueda leerlo la persona que cuente con la clave de cifrado adecuada para descifrarlo. La aplicación cifra y descifra mensajes basándose en el Cifrado César.
La idea es que ingreses el mensaje que quieres cifrar y además escojas un offset o desplazamiento que va ser determinante para obtener tu mensaje codificado, el cual podrás enviarselo a tus amigos junto con el offset elegido y así ellos podrán ingresar a CipherText y descifrar tu mensaje.
CipherText es una aplicación dirigida a hombres y mujeres entre 17 y 35 años que utilicen redes sociales, especialmente
facebook o whatsapp, para mantenerse en contacto y comunicarse con sus amigos y familia, idealmente dependientes del celular o que pasen mucho tiempo en rrss.
Principalmente para que los usuarios puedan mantener conversaciones realmente privadas y secretas con la o las personas que ellos deseen en el caso de que en su entorno exista alguien que les revisa el celular, también  o que en caso de pérdida de este sus conversaciones no se filtren o publiquen sin su consentimiento.

USUARIO PRODUCTO
escribir el mensaje en la caja de texto luego en la caja mas pequeña elegir un desplazamiento que va a ser clave para cifrar el mensaje, luego presionar el botón cifrar y obtendra el mensaje cifrado. Con este mensaje puede copiarlo y enviarlo a sus amigos y para eso al final de la página están los links a las paginas principales de las rrss

¿Qué es el cifrado César?

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

# Instalación
Por el momento esta app no requiere instalación, ya que se accede a ella desde el siguiente link:
(https://LeslieSaVa.github.io/scl-2018-11-bc-core-cipher/index.html)


# Historia de usuario

## Javiera y su historia
Javiera, tiene 20 años es estudiante universitaria, usuaria de rrss facebook pero sobre todo de whatsapp, pasa todo el día revisando sus mensajes y su email. Pepita quiere contarle a su mejor amiga  que quiere terminar con su pololo porque hay actitudes de él que le molestan como que no la deja salir con sus amigas y que le revisa el celular periodicamente.
Pepita ingresa a CipherText y utiliza la página para escribir su situacíon, obtener un mensaje cifrado y poder copiarlo para enviarselo con tranquilidad a su amiga por whatsapp o facebook junto al desplazamiento(offset) que ella escogió para que su amiga entre a CipherText, pegue el mensaje, digite el offset y pueda descifrar el mensaje de su amiga y a su vez escribirle una respuesta y cifrarla.

***
#Test del Prototipado
La aplicación se sometió al testeo de Alex, estudiante, 26 años. Él al abrir la página leyó atentamente toda la
primera pantalla de introducción, luego se le presento la duda del offset pero al observar la imagen donde se muestra el ejemplo del cifrado pudo resolver su inquietud y continuar.
Al pasar a la siguiente pantalla, leyó las instrucciones, escribió un mensaje, eligió un offset y logró cifrar el mensaje.
Pudo utilizar la aplicación sin mayores problemas, sin embargo, las observaciones que me entregó a partir del test fueron:
- Cifrar y descifrar son palabras complejas que necesitan mas explicación
- Él entendió lo que era el offset gracias al ejemplo de la imagen
-

#Planificación
Trello
#Interfaz de usuario
#Mejoras futuras
#Test aplicados



#Consideraciones de diseño
- Debido a la simple finalidad de la página se decidió realizar solo dos pantallas. La primera donde se explica brevemente de que trata la aplicación, su finalidad y qué es el offset. La segunda es donde se encuentran las instrucciones, la caja de texto donde el usuario debe escribir su mensaje, la caja del offset, los botones de Cifrar y Descifrar, además de un botón Volver y el área de texto donde se mostrara el mensaje cifrado o descifradp.


![Pantalla 1](ImgProyecto1/Pantallauno.png)
![Pantalla 2](ImgProyecto1/Pantallados.png)


- La gama de colores elegida fue con la finalidad de darle confianza al usuario,
que su imagen fuera de una página confiable y a la vez neutra (para Hombres
y mujeres) que se viera clara, luminosa, simple y sin tanto texto para no aburrir
al usuario

- Las dos imagenes principales de la página escogidas fueron escogidas con la finalidad de contagiar al usuario las ganas de usar la app en su celular y a la vez mostrar la conectividad al ver muchas manos con celulares idealmente enviandose mensajes. Son imagénes que reprensentan a los amigos junto con la tecnología y conectividad de hoy en día.

![Imagen celulares](ImgProyecto1/celulares.jpg)
![Imagen Principal](ImgProyecto1/

- También se puede observar una imagen  del cifrado césar para ayudar a comprender al usuario (con un ejemplo) como funciona el cifrado césar y que es el offset.

![Imagen Ejemplo](ImgProyecto1/ciphercode1.jpg)

- Las instrucciones son cortas y precisas para que el usuario no se abrume con
tantas consideraciones de uso.
- Se incluye un alert para avisarle al usuario de que en caso de que su mensaje
contenga la letra Ñ, esta no sera cifrada y se mostrara tal cual en el mensaje cifrado
- Al final de la página se encuentran enlazadas las principales rrss con el finalde facilitarle al usuario el envío de su mensaje a amigos o familia.l


#¿Cómo funciona?
- El usuario debe ingresar a la página
- Debe leer la breve instroducción acerca del Cifrado César para saber que es
el offset o desplazamiento que ser requerido más adelante
- Luego presionar el botón A cifrar !
- Leer las intrucciones
- Escribir el mensaje que desea cifrar en la caja de texto donde se lee "Escribir mensaje"
- A continuación, debe elegir y escribir un número cualquiera en el recuadro que dice offset
- Luego debe presionar el botón de cifrar o descifrar según sea el caso
- El mensaje cifrado o descifrado será presentado en otra caja de texto que se encontrara debajo del recuadro del offset
- Por último el usuario tendrá la opción de volver a la página principal presionando el botón Volver que se encuentra al final de la página

INFO DEVELOPER
ES6
TDD BDD
