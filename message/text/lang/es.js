/* message archive in Spanish */
const { prefix } = require('../../../config.json')

exports.unreg = () => {
    return `Se ha anulado el registro.`
}

exports.wait = () => {
    return `Por favor, espere un momento...`
}

exports.ok = () => {
    return `Listo!`
}

exports.videoLimit = () => {
    return `El tamaño del vídeo/GIF es demasiado grande.`
}

exports.wrongFormat = () => {
    return `Formato incorrecto Compruebe el uso en *${prefix}help*`
}

exports.emptyMess = () => {
    return `Por favor, introduzca el mensaje.`
}

exports.cmdNotFound = (cmd) => {
    return `Comando no *${prefix}${cmd}* encontrado!`
}

exports.blocked = (ownerNumber) => {
    return `El bot no puede recibir llamadas. Has sido bloqueado por incumplir las normas.\n\nPóngase en contacto con el propietario: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `Este comando sólo puede ser utilizado por el propietario.`
}

exports.groupOnly = () => {
    return `Este comando sólo puede utilizarse en grupo.`
}

exports.adminOnly = () => {
    return `Este comando sólo puede ser utilizado por administradores de grupo.`
}

exports.addedGroup = (chat) => {
    return `Gracias por invitarme, miembros de *${chat.contact.name}*!\n\nPor favor, regístrese en *chat privado* escribiendo:\n*${prefix}register* Nombre`
}

exports.listBlock = (blockNumber) => {
    return `
╭─━━━  「 SALÓN DE LA VERGÜENZA 」 ━━━─╮

     Bloqueos totales: *${blockNumber.length}* usuario(s)\n

╰─━━━━━━━━━━━━━━━━━━━━━─╯
    `
}

exports.notPremium = () => {
    return `Lo sentimos. Este comando sólo puede ser utilizado por usuarios Premium.`
}

exports.notAdmin = () => {
    return `El usuario no es un administrador.`
}

exports.adminAlready = () => {
    return `No se puede promocionar a un usuario que ya es administrador.`
}

exports.botNotPremium = () => {
    return `Este bot no admite comandos premium. Ponte en contacto con el propietario de este bot.`
}

exports.botNotAdmin = () => {
    return `¡Primero haz el bot como admin!`
}

exports.notRegistered = () => {
    return `No te has registrado en nuestra base de datos!\n\nPor favor, regístrese en *chat privado* escribiendo:\n*${prefix}register* Nombre`
}

exports.nsfwDisabled = () => {
    return `NSFW está actualmente desactivado o ha alcanzado el límite. Utilice *nsfwon* para activarlo.`
}

exports.nsfwOff = () => {
    return `NSFW ha sido desactivado.`
}

exports.nsfwOn = () => {
    return `Se ha habilitado el NSFW.`
}

exports.nsfwError = () => {
    return `Sólo el propietario o administrador puede habilitar el NSFW.`
}

exports.registered = (name, userId, time, serial) => {
    return `
╭─━━━  「 REGISTRO 」 ──╮

Tu cuenta ha sido creada con la siguiente información:
➸ **Nombre**: ${name}
➸ **ID**: ${userId}
➸ **Registrado en**: ${time}
➸ **Número de serie**: ${serial}
    
Nota:
No compartas tu **número de serie** con nadie.
    
Escribe **${prefix}reglas** para ver las reglas.
    
╰─━━━━━━━━━━━━━━━━━━━━━─╯
    `
}

exports.registeredAlready = () => {
    return `Ya te has registrado antes.`
}

exports.received = (pushname) => {
    return `Hola ${pushname}!\nGracias por el informe, trabajaremos en ello lo antes posible.`
}

exports.daily = (time) => {
    return `Lo sentimos, pero has llegado al límite usando este comando.\nPorfavor espera *${time.hours}* hora(s) *${time.minutes}* minuto(s) *${time.seconds}* segundo(s) más.`
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp) => {
    return `
╭─━━━  「 INFORMACIÓN DE USUARIO 」 ──╮

➸ **Nombre de usuario**: ${username}
➸ **Estado**: ${status}
➸ **Premium**: ${premi}
➸ **Baneado**: ${benet}
➸ **Administrador**: ${adm}
    
=_=_=_=_=_=_=_=_=_=_=_=_=
    
╭─━━━  「 PROGRESO 」 ──╮
    
➸ **Nivel**: ${level}
➸ **XP**: ${xp} / ${requiredXp}
    `
}

exports.detectorOn = (name, formattedTitle) => {
    return `
╭─━━━  「 ANTI ENLACE DE GRUPO 」 ──╮

Anuncio para todos los miembros de *${(name || formattedTitle)}*.
Este grupo cuenta con un detector de enlaces de grupo; si alguien envía un enlace de grupo, será expulsado inmediatamente.
    
Gracias por tu atención.
- Administrador *${(name || formattedTitle)}*
    
╰─━━━━━━━━━━━━━━━━━─╯ 
    `
}

exports.linkDetected = () => {
    return `
╭─━━━  「 ANTI ENLACE DE GRUPO 」 ──╮

¡Has enviado un enlace de grupo!
 Lo siento, pero debes abandonar...
    
╰─━━━━━━━━━━━━━━━─╯    
    `
}

exports.detectorOff = () => {
    return `La función de enlace antigrupo se ha *desactivado* correctamente.`
}

exports.detectorOnAlready = () => {
    return `La función de enlace antigrupo ya ha sido activada.`
}

exports.antiNsfwOn = (name, formattedTitle) => {
    return `
╭─━━━  「 ANTI ENLACE NSFW 」 ──╮

Anuncio para todos los miembros de *${(name || formattedTitle)}*.
Este grupo cuenta con un detector de enlaces NSFW; si alguien envía un enlace NSFW, será expulsado inmediatamente.
    
Gracias por tu atención.
- Administrador *${(name || formattedTitle)}*
    
╰─━━━━━━━━━━━━━━━─╯    
    `
}

exports.antiNsfwOff = () => {
    return `La función de enlace Anti-NSFW se ha *desactivado* correctamente.`
}

exports.antiNsfwOnAlready = () => {
    return `La función de enlace Anti-NSFW ha sido activada anteriormente.`
}

exports.antiBadWordsOn = (name, formattedTitle) => {
    return `
╭─━━━  「 ANTI PALABRAS OFENSIVAS 」 ──╮

Anuncio para todos los miembros de *${(name || formattedTitle)}*.
Este grupo cuenta con un detector de palabras ofensivas; si alguien envía palabras ofensivas, el mensaje relacionado será eliminado.
    
Gracias por tu atención.
- Administrador *${(name || formattedTitle)}*
    
╰─━━━━━━━━━━━━━━━─╯
    `
}

exports.antiBadWordsOff = () => {
    return `La función antipalabras malsonantes ha sido *desactivada* con éxito.`
}

exports.antiBadWordsOnAlready = () => {
    return `La función antipalabras malsonantes ya está activada.`
}

exports.antiBadWordsError = () => {
    return `La función antipalabras malsonantes está actualmente *desactivada*, por favor, actívala primero.`
}

exports.levelingOn = () => {
    return `La función de nivelación se ha *activado* correctamente.`
}

exports.levelingOff = () => {
    return `La función de nivelación se ha *desactivado* correctamente.`
}

exports.levelingOnAlready = () => {
    return `La función de nivelación se ha activado antes.`
}

exports.levelingNotOn = () => {
    return `No se ha activado la función de nivelación.`
}

exports.levelNull = () => {
    return `¡Todavía no tienes ningún nivel!`
}

exports.welcome = (event) => {
    return `Bienvenido @${event.who.replace('@c.us', '')}!`
}

exports.welcomeOn = () => {
    return `La función de bienvenida se ha *activado* correctamente.`
}

exports.welcomeOff = () => {
    return `La función de bienvenida se ha *desactivado* correctamente.`
}

exports.welcomeOnAlready = () => {
    return `La función de bienvenida ya ha sido activada anteriormente.`
}

exports.minimalDb = () => {
    return `¡Necesito al menos *10* usuarios que tengan un nivel en la base de datos!`
}

exports.autoStikOn = () => {
    return `La función de pegatina automática se ha *activado* correctamente.`
}

exports.autoStikOff = () => {
    return `La función de pegatinas automáticas se ha *desactivado* correctamente.`
}

exports.autoStikOnAlready = () => {
    return `La función de pegatinas automáticas ya estaba activada.`
}

exports.afkOn = (pushname, reason) => {
    return `
╭─━━━  「 MODO AFK 」 ──╮

La función AFK se ha *activado* correctamente.
➸ *Nombre de usuario*: ${pushname}
➸ *Motivo*: ${reason}
    
╰─━━━━━━━━━━━━━━━─╯   
    `
}

exports.afkOnAlready = () => {
    return `La función AFK ya ha sido activada anteriormente.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `
╭─━━━  「 MODO AFK 」 ──╮

¡Ssshhh! ¡Esta persona está actualmente AFK!
➸ *Motivo*: ${getReason}
➸ *Desde*: ${getTime}
    
╰─━━━━━━━━━━━━━━━─╯    
    `
}

exports.afkDone = (pushname) => {
    return `*${pushname}* ¡ha vuelto de AFK!`
}

exports.gcMute = () => {
    return `
╭─━━━  「 SILENCIADO 」 ──╮

Solo los administradores pueden enviar mensajes en este grupo.
    
╰─━━━━━━━━━━━━━─╯
    `
}

exports.gcUnmute = () => {
    return `
╭─━━━  「 DESILENCIADO 」 ──╮

Todos los miembros pueden enviar mensajes en este grupo ahora.
    
╰──━━━━━━━━━━━━━━━─╯
    `
}

exports.notNum = (q) => {
    return `"${q}", ¡no es un número!`
}

exports.registeredFound = (name, time, serial, userId) => {
    return `
╭─━━━  「 REGISTRADO 」 ──╮

¡Se ha encontrado la cuenta!
➸ *Nombre*: ${name}
➸ *ID*: ${userId}
➸ *Hora de registro*: ${time}
➸ *Serial*: ${serial}
    
╰─━━━━━━━━━━━━━━━━─╯ 
    `
}

exports.registeredNotFound = (serial) => {
    return `serie de cuenta: *${serial}* ¡no encontrada!`
}

exports.pcOnly = () => {
    return `Este comando sólo puede utilizarse en el chat privado.`
}

exports.linkNsfw = () => {
    return `
╭─━━━  「 ANTI ENLACE NSFW 」 ──╮

¡Has enviado un enlace de grupo!
Lo siento, pero tienes que irte...
    
╰─━━━━━━━━━━━━━━━━━─╯    
    `
}

exports.fakeLink = () => {
    return `El enlace que has enviado es sospechoso, por la seguridad del grupo te voy a expulsar.\nAdiós.`
}

exports.muteChatOn = () => {
    return `¡Bot *silenciado* con éxito para este grupo!`
}

exports.muteChatOff = () => {
    return `Bot *desactivado* con éxito para este grupo.`
}

exports.muteChatOnAlready = () => {
    return `¡Bot ya está silenciado en este grupo!`
}

exports.limit = () => {
    return `
╭─━━━  「 LÍMITE 」 ──╮

¡Has alcanzado el límite de uso! Por favor, sigue las siguientes instrucciones:
❏ *_Espera hasta las 12:00 AM (UTC+7)_*
    
╰─━━━━━━━━━━━━━─╯    
    `
}

exports.reminderOn = (messRemind, parsedTime, sender) => {
    return `
╭─━━━  「 RECORDATORIO 」 ──╮

¡Se ha establecido un recordatorio!
➸ *Mensaje*: ${messRemind}
➸ *Duración*: ${parsedTime.hours} hora(s) ${parsedTime.minutes} minuto(s) ${parsedTime.seconds} segundo(s)
➸ *Para*: @${sender.id.replace('@c.us', '')}
    
╰─━━━━━━━━━━━━━━━─╯    
    `
}

exports.reminderAlert = (messRemind, sender) => {
    return `
╭─━━━  「 RECORDATORIO 」 ──╮

⏰ @${sender.id.replace('@c.us', '')} ⏰
➸ *Mensaje*: ${messRemind}
    
╰─━━━━━━━━━━━━━━━─╯`
}

exports.nameChanged = (q) => {
    return `El nombre de usuario ha cambiado a *${q}*`
}

exports.menu = (jumlahUser, level, xp, role, pushname, requiredXp, premium) => {
    return `
╭─━━━  「 BIENVENIDO 」 ──╮

======================
➸ *Nombre*: ${pushname}
➸ *Nivel*: ${level}
➸ *XP*: ${xp} / ${requiredXp}
➸ *Rol*: ${role}
➸ *Premium*: ${premium}
======================
    
Total registrado: *${jumlahUser}*
    
*[1]* Descargador
*[2]* Bot
*[3]* Otros
*[4]* Sticker
*[5]* Anime
*[6]* Diversión
*[7]* Moderación
*[8]* Propietario
*[9]* Niveles
*[10]* IA
*[11]* NSFW
    
Escribe *${prefix}menu* número_de_índice para abrir el menú seleccionado.
    
Nota:
El bot tiene un tiempo de espera de *5 segundos* cada vez que lo usas.
    
╰─━━━━━━━━━━━━━━━─╯    
    `
}

exports.menuDownloader = () => {
    return `
╭─── 「 DESCARGADOR 」 ───╮

1. **${prefix}twitter**
- Descarga contenido de Twitter.
- Alias: *twt*
- Uso: **${prefix}twitter** enlace
    
2. **${prefix}youtube**
- Descarga videos de YouTube.
- Alias: *yt*
- Uso: **${prefix}youtube** enlace
    
╰─ Índice [1] ─╯    
    `
}

exports.menuBot = () => {
    return `
╭─── 「 BOT 」 ───╮

1. **${prefix}rules**
- Leer obligatoriamente.
- Aliases: *rule*
- Uso: **${prefix}rules**
    
2. **${prefix}menu**
- Mostrar comandos disponibles.
- Aliases: -
- Uso: **${prefix}menu** número_de_índice
    
3. **${prefix}status**
- Mostrar estado del bot.
- Aliases: *stats*
- Uso: **${prefix}status**
    
4. **${prefix}listblock**
- Verificar números bloqueados.
- Aliases: -
- Uso: **${prefix}listblock**
    
5. **${prefix}ping**
- Verificar velocidad del bot.
- Aliases: *p*
- Uso: **${prefix}ping**
    
6. **${prefix}delete**
- Eliminar mensajes del bot.
- Aliases: *del*
- Uso: Responde a mensajes eliminados con una leyenda **${prefix}delete**
    
7. **${prefix}report**
- Reportar errores al propietario.
- Aliases: -
- Uso: **${prefix}report** texto
    
8. **${prefix}tos**
- Términos de servicio.
- Aliases: -
- Uso: **${prefix}tos**
    
9. **${prefix}join**
- Unirse a un grupo a través del enlace.
- Aliases: -
- Uso: **${prefix}join** enlace_del_grupo
    
10. **${prefix}ownerbot**
- Enviar información de contacto del propietario.
- Aliases: -
- Uso: **${prefix}ownerbot**
    
11. **${prefix}getpic**
- Enviar la foto de perfil del usuario.
- Aliases: -
- Uso: **${prefix}getpic** @usuario/62812xxxxxxxx
    
12. **${prefix}premiumcheck**
- Verificar el tiempo premium restante.
- Aliases: *cekpremium*
- Uso: **${prefix}premiumcheck**
    
13. **${prefix}premiumlist**
- Lista de usuarios premium.
- Aliases: *listpremium*
- Uso: **${prefix}premiumlist**
    
14. **${prefix}limit**
- Verificar tu límite restante.
- Aliases: -
- Uso: **${prefix}limit**
    
15. **${prefix}serial**
- Verificar tu biografía usando el número de serie.
- Aliases: -
- Uso: **${prefix}serial** número_de_serie
    
16. **${prefix}runtime**
- Verificar el tiempo de ejecución del host.
- Aliases: -
- Uso: **${prefix}runtime**
    
17. **${prefix}unregister**
- Anular el registro de tu cuenta.
- Aliases: *unreg*
- Uso: **${prefix}unregister**
    
╰─ Índice [2] ─╯    
    `
}

exports.menuMisc = () => {
    return `
╭─── 「 OTROS 」 ───╮

1. *${prefix}say*
- El bot repetirá tu mensaje.
- Aliases: -
- Uso: *${prefix}say* texto
    
2. *${prefix}tts*
- Crea un audio de texto a voz.
- Aliases: -
- Uso: *${prefix}tts* código_de_idioma | texto
(Puedes encontrar códigos de idioma aquí: [Códigos ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes))
    
3. *${prefix}afk*
- Configura tu cuenta en modo AFK.
- Aliases: -
- Uso: *${prefix}afk* razón. Envía cualquier mensaje al grupo para desactivar.
    
4. *${prefix}math*
- Una calculadora.
- * = multiplicación, + = suma, - = resta, / = división
- Aliases: -
- Uso: *${prefix}math* 12*12
    
5. *${prefix}reminder*
- Recordatorio.
- *s* - segundos, *m* - minutos, *h* - horas, *d* - días
- Aliases: -
- Uso: *${prefix}reminder* 10s | mensaje_recordatorio
    
6. *${prefix}imagetourl*
- Subidor de imágenes.
- Aliases: *imgtourl*
- Uso: Envía imágenes con la leyenda *${prefix}imagetourl* o responde a la imagen con la leyenda *${prefix}imagetourl*
    
7. *${prefix}genshininfo*
- Información de personajes de Genshin Impact.
- Aliases: *genshin*
- Uso: *${prefix}genshininfo* nombre_del_personaje
    
8. *${prefix}translate*
- Traduce un texto.
- Aliases: *tl*
- Uso: *${prefix}translate* texto | código_idioma
    
9. *${prefix}tomp3*
- Convierte un video a audio solo (MP3).
- Aliases: -
- Uso: Envía un video con la leyenda *${prefix}tomp3* o responde al video con la leyenda *${prefix}tomp3*
    
10. *${prefix}bass*
- Refuerzo de graves.
- Aliases: -
- Uso: Responde a audio/voz con la leyenda *${prefix}bass* nivel_dB.
    
11. *${prefix}nightcore*
- Crea un efecto nightcore.
- Aliases: -
- Uso: Responde a audio/voz con la leyenda *${prefix}nightcore*
    
12. *${prefix}google*
- Busca en Google.
- Aliases: *googlesearch*
- Uso: *${prefix}google* consulta
    
13. *${prefix}toptt*
- Crea audio PTT.
- Aliases: *ptt*
- Uso: Responde a audio/voz con la leyenda *${prefix}toptt*
    
╰─ Índice [3] ─╯    
    `
}

exports.menuSticker = () => {
    return `
╭─── 「 STIKER 」 ───╮

1. *${prefix}sticker*
- Crea stickers a partir de imágenes enviadas o respondidas.
- Aliases: *stiker*
- Uso: Envía imágenes con la leyenda *${prefix}sticker* o responde a las imágenes con la leyenda *${prefix}sticker*
    
2. *${prefix}stickergif*
- Crea stickers a partir de videos/GIFs.
- Aliases: *stikergif* *sgif*
- Uso: Envía videos/GIFs con la leyenda *${prefix}stickergif* o responde a los videos/GIFs con la leyenda *${prefix}stickergif*
    
3. *${prefix}stickertoimg*
- Convierte un sticker a imagen.
- Aliases: *stikertoimg* *toimg*
- Uso: Responde a los stickers con la leyenda *${prefix}stickertoimg*
    
4. *${prefix}stickerwm*
- Crea un sticker con metadatos/WM.
- Aliases: *stcwm*
- Uso: Envía imágenes con la leyenda *${prefix}stickerwm* nombre_paquete | nombre_autor o responde a la imagen con la leyenda *${prefix}stickerwm* nombre_paquete | nombre_autor
    
5. *${prefix}stickermeme*
- Crea un sticker meme.
- Aliases: *stcmeme*
- Uso: Envía imágenes con la leyenda *${prefix}sticker* texto_superior | texto_inferior o responde a las imágenes con la leyenda *${prefix}sticker* texto_superior | texto_inferior
    
6. *${prefix}takestick*
- Edita los metadatos del sticker.
- Aliases: *take*
- Uso: Responde a los stickers con la leyenda *${prefix}takestick* nombre_paquete | nombre_autor
    
7. *${prefix}stickernobg*
- Crea stickers a partir de imágenes enviadas o respondidas con fondo blanco.
- Aliases: *take*
- Uso: Envía imágenes con la leyenda *${prefix}stickernobg* o responde a las imágenes con la leyenda *${prefix}stickernobg*
    
╰─ Índice [4] ─╯    
    `
}

exports.menuWeeaboo = () => {
    return `
*── 「 WEEABOO 」 ──*

1. *${prefix}neko*
Send a neko girl photo.
Aliases: -
Usage: *${prefix}neko*

2. *${prefix}wallpaper*
Send anime wallpapers.
Aliases: *wp*
Usage: *${prefix}wallpaper*

3. *${prefix}kemono*
Send kemonomimi girl photos.
Aliases: -
Usage: *${prefix}kemono*

4. *${prefix}wait*
Search anime source from the screenshots scene.
Aliases: -
Usage: Send screenshots with caption *${prefix}wait* or reply to the screenshots with a caption *${prefix}wait*

5. *${prefix}source*
Look for sources from the doujin panel, illustrations, and images related to anime.
Aliases: *sauce*
Usage: Send images with caption *${prefix}source* or reply to the images with a caption *${prefix}source*

6. *${prefix}waifu*
Send random waifu photos.
Aliases: -
Usage: *${prefix}waifu*

_Index of [5]_
    `
}

exports.menuFun = () => {
    return `
*── 「 FUN 」 ──*

1. *${prefix}triggered*
Apply a triggered effect to image.
Aliases: -
Usage: Send image with caption *${prefix}triggered* or reply to someone message with caption *${prefix}triggered* or you can directly use *${prefix}triggered*

2. *${prefix}kiss*
Kiss someone ( ͡° ͜ʖ ͡°).
Aliases: -
Usage: Send image with caption *${prefix}kiss* or reply image with caption *${prefix}kiss*

3. *${prefix}profile*
Check my profile.
Aliases: *me*
Usage: *${prefix}profile*

4. *${prefix}trash*
Trash?
Aliases: -
Usage: *${prefix}trash*


_Index of [6]_
    `
}

exports.menuModeration = () => {
    return `
*── 「 MODERATION 」 ──*

1. *${prefix}add*
Add users to group.
Aliases: -
Usage: *${prefix}add* 628xxxxxxxxxx

2. *${prefix}kick*
Remove members from the group.
Aliases: -
Usage: *${prefix}kick* @member1

3. *${prefix}promote*
Promote member to become admin.
Aliases: -
Usage: *${prefix}promote* @member1

4. *${prefix}demote*
Demote member from admin.
Aliases: -
Usage: *${prefix}demote* @member1

5. *${prefix}leave*
Leave bot from group.
Aliases: -
Usage: *${prefix}leave*

6. *${prefix}everyone*
Mention all group members.
Aliases: -
Usage: *${prefix}everyone*

7. *${prefix}groupicon*
Change group icon.
Aliases: -
Usage: Send images with caption *${prefix}groupicon* or reply to the images with a caption *${prefix}groupicon*

8. *${prefix}antilink*
Toogle anti-group link feature.
Aliases: -
Usage: *${prefix}antilink* enable/disable

9. *${prefix}welcome*
Toogle welcome feature.
Aliases: -
Usage: *${prefix}welcome* enable/disable

10. *${prefix}autosticker*
Toogle auto-sticker feature. Every sended image will made into a sticker.
Aliases: *autostiker autostik*
Usage: *${prefix}autostiker* enable/disable

11. *${prefix}antinsfw*
Toogle anti-NSFW link.
Aliases: -
Usage: *${prefix}antinsfw* enable/disable

12. *${prefix}mutegc*
Set group to admin only who can send a message.
Aliases: -
Usage: *${prefix}mutegc* enable/disable

13. *${prefix}grouplink*
Send a invite link of current group.
Aliases: -
Usage: *${prefix}grouplink*

14. *${prefix}revoke*
Revoke invite link of current group.
Aliases: -
Usage: *${prefix}revoke*

15. *${prefix}leveling*
Toogle leveling feature.
Aliases: -
Usage: *${prefix}leveling* enable/disable

16. *${prefix}badwords*
Setting up anti-bad words feature.
Aliases: *badword*
Usage: *${prefix}badwords* enable/disable or add/remove to add/remove a blacklist words.

_Index of [7]_
    `
}

exports.menuOwner = () => {
    return `
*── 「 OWNER 」 ──*

1. *${prefix}bc*
Create a broadcast.
Aliases: -
Usage: *${prefix}bc* text

2. *${prefix}clearall*
Deletes all chats on the bot account.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}getses*
Take a screenshot of the session from the bot account.
Aliases: -
Usage: *${prefix}getses*

4. *${prefix}ban*
Add/remove banned users.
Aliases: -
Usage: *${prefix}ban* add/del @user/62812xxxxxxxx

5. *${prefix}leaveall*
Leave from all groups.
Aliases: -
Usage: *${prefix}leaveall*

6. *${prefix}eval*
Evaluate the JavaScript code.
Aliases: *ev*
Usage: *${prefix}eval*

7. *${prefix}shutdown*
Shutdown bot.
Aliases: -
Usage: *${prefix}shutdown*

8. *${prefix}premium*
Add/remove premium user.
*s* - seconds
*m* - minutes
*h* - hours
*d* - days
Aliases: -
Usage: *${prefix}premium* add/del @user/62812xxxxxxxx 30d

9. *${prefix}setstatus*
Set about me.
Aliases: *setstatus setstat*
Usage: *${prefix}status* text

10. *${prefix}serial*
Check user's serial.
Aliases: -
Usage: *${prefix}serial* user_serial

11. *${prefix}exif*
Adjust your sticker WM.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

12. *${prefix}mute*
Mute all users.
Aliases: -
Usage: Use *${prefix}mute* to mute and use *${prefix}mute* once again to unmute.

13. *${prefix}setname*
Change bot's name. Maximum 25 characters.
Aliases: -
Usage: *${prefix}name* new_username

14. *${prefix}block*
Block user.
Aliases: *blok*
Usage: *${prefix}block* @user/62812xxxxxxxx

15. *${prefix}unblock*
Unblock user.
Aliases: *unblok*
Usage: *${prefix}unblock* @user/62812xxxxxxxx

16. *${prefix}xp*
Add XP to someone.
Aliases: -
Usage: *${prefix}xp* @user amount_xp

_Index of [8]_
    `
}

exports.menuLeveling = () => {
    return `
*── 「 LEVELING 」 ──*

1. *${prefix}level*
Check your level.
Aliases: -
Usage: *${prefix}level*

2. *${prefix}leaderboard*
Check leaderboard.
Aliaases: -
Usage: *${prefix}leaderboard*

_Index of [9]_
    `
}

exports.menuAi = () => {
    return `
*── 「 AI 」 ──*

1. *${prefix}ai*
ChatGPT 3.5 implementation.
Aliases: -
Usage: *${prefix}ai* your_question

2. *${prefix}image*
Create image from given prompt.
Aliases: *img*
Usage: *${prefix}image* prompt

_Index of [10]_
    `
}

exports.menuNsfw = () => {
    return `
*── 「 NSFW 」 ──*
    
1. *${prefix}nsfw*
Send random waifu nsfw photos
Aliases: -
Usage: *${prefix}nsfw*

2. *${prefix}nsfwon*
enables the nsfw command in the group
Aliases: -
Usage: *${prefix}nsfwon*

3. *${prefix}nsfwoff*
disable the nsfw command in the group
Aliases: -
Usage: *${prefix}nsfwoff*

_Index of [11]_
    `
}

exports.rules = () => {
    return `
*── 「 RULES 」 ──*

1. Do NOT spam bot.
Penalty: *WARN/SOFT BLOCK*

2. Do NOT call bot.
Penalty: *SOFT BLOCK*

3. Do NOT exploit bots.
Penalty: *PERMANENT BLOCK*

If you've understand these rules, please type *${prefix}menu* to get started.
    `
}

// Note for owner/hoster, please DO NOT edit this section.
exports.tos = (ownerNumber) => {
    return `
*── 「 TERMS OF SERVICE 」 ──*

This bot is an open-source bot, come with the name of BocchiBot which is available on GitHub for free.
The owner/hoster of this bot is independent from the responsibility and supervision of the developer (Slavyan).
Owner/hoster may plagiarize, add, delete, replace source code with notes *DO NOT SELL* this source code in any form.
If an error occurs, the first person you should contact is the owner/hoster.  

If you want to contributing to this project, visit:
https://github.com/SlavyanDesu/BocchiBot

Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)

Regards,
Slavyan
    `
}
