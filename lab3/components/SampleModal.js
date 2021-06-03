import React from 'react';
import {Button,Modal,Text,Image,View,StyleSheet,ScrollView} from 'react-native';

const SampleModal = props => {
  return (
    
  <View style={styles.container}>
    <Modal visible={props.visible}>
    <ScrollView>
      <Image style={styles.image} source={require('./mushoku-tensei.jpg')} />
      
      <Text style={styles.text}>
      Mushoku Tensei: Jobless Reincarnation (Japanese: 無職転生 〜異世界行ったら本気だす〜, Hepburn: Mushoku Tensei: Isekai Ittara Honki Dasu, lit. Jobless Reincarnation: I Will Seriously Try If I Go to Another World) is a Japanese light novel series by Rifujin na Magonote[a] about a jobless and hopeless man who reincarnates in a fantasy world while keeping his memories, determined to live his new life without regrets. Originally published on the internet web novel website Shōsetsuka ni Narō in November 2012, a year later, it was announced the series would receive a print release under Media Factorys MF Books imprint with illustrations done by a Pixiv user called Shirotaka.A manga adaptation by Yuka Fujikawa began serialization in the June 2014 issue of Monthly Comic Flapper. Seven Seas Entertainment licensed the tankōbon volumes of the manga for localization in North America. The company also has licensed the original light novels. On Syosetus rankings, the web novel has made cumulative appearances as the most popular work on the website.[2] An anime television series adaptation by Studio Bind premiered in January 2021.{'\n\n'}

An unnamed, 34-year-old Japanese NEET is evicted from his home following his parents death. Upon some self-introspection, he concludes that his life was ultimately pointless. He intercepts a speeding truck heading towards a group of teenagers in an attempt to do something meaningful for once in his life and manages to pull one of them out of harms way before dying. Awakening in a babys body, he realizes he has been reincarnated in a world of sword and sorcery. He resolves to become successful in his new life, discarding his past identity for his new life as Rudeus Greyrat. Due to inherited affinity and early training, Rudeus becomes highly skilled at magic. During his childhood, he becomes a student of demon magician Roxy Migurdia, a friend to demihuman Sylphiette, and magic teacher to noble heiress Eris Boreas Greyrat.{'\n\n'}
As Rudeus finally feels like he has found his place in the world, a major magical catastrophe destroys his nation, teleporting and stranding hundreds of thousands of people far from home - some into dangerous places or situations, resulting in their deaths due to murder, war, execution, monster attack, or exposure to the elements. Stranded practically on the other side of the world in a foreign land, Rudeus resolves to escort Eris home, aided by a strong warrior named Ruijerd Supardia who he has befriended. During his thousands-of-miles-long journey, Rudeus is contacted by a mysterious, untrustworthy being calling itself the Human-God, who gives him questionable advice for an unknown agenda. After three years of struggle - including being defeated by an incredibly powerful world-class warrior named Orstead - Rudeus successfully escorts Eris home to the remains of his shattered homeland. Political events and a personal misunderstanding with Eris leaves Rudeus heartbroken.{'\n\n'}
Two years later, the incident with Eris has made Rudeus impotent. He enrolls in Ronoa Magic University under the Human-Gods advice. There, he is reunited with Sylphiette, who heals his impotence, and the two are wedded shortly after. Rudeus rejoins his fathers quest to save his mother, ignoring the Human-Gods advice. He reunited and developed a romantic relationship with Roxy during the adventure and takes her as his second wife. He is then visited by a dying future version of himself, warning him the Human-God will cause the deaths of everyone he cares about. To appease the Human-God, Rudeus feigns an attempt to kill Orsted, who is one of Human-Gods enemies but instead, Rudeus offers his allegiance to Orsted in exchange for his familys protection. Shortly after, Rudeus takes Eris as his third wife.

The series continues episodically with a series of story arcs based around Rudeus work with Orsted to ensure the Human-Gods precise demise, as well as his daily life and growing family. After a large scale attack on Rudeus life fails, the Human God gives up on his plans against him, opting to scheme against Rudeuss descendants. Rudeus lives the rest of his life peacefully before his natural death at the age of 74.{'\n\n'}
      </Text>
      </ScrollView>
          <Button title="CLOSE" onPress={props.onClose} />
    </Modal>
  </View>
  );
};
const styles=StyleSheet.create({
  text:{
    textAlign:'justify',
    margin: 5,
    backgroundColor: 'lightyellow',
    borderRadius: 5,
  },
image:{
    margin: 5,
    width: 350,
    height: 150,
    borderRadius: 5
    
  }
});
export default SampleModal;