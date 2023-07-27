import React, {useState, useEffect} from 'react';
import {View, Text, Button, Switch, StyleSheet, Image} from 'react-native';

export default function FishFeeder() {
  const [isFeeding, setIsFeeding] = useState(false);

  const [lastFed, setLastFed] = useState<string | undefined>();
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    // 每秒更新时间
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    // 更新喂食时间
    if (isFeeding) {
      setLastFed(new Date().toLocaleString());
    }

    // 清除
    return () => clearInterval(timeInterval);
  }, [isFeeding]);

  return (
    <View style={styles.container}>
      <Image source={require('./img/R-C.gif')} style={styles.banner} />

      <View style={styles.content}>
        <Text style={styles.time}>当前时间:{currentTime.toLocaleString()}</Text>

        <Switch value={isFeeding} onValueChange={val => setIsFeeding(val)} />

        <Text style={styles.lastFed}>上次喂食时间:{lastFed}</Text>

        <View style={styles.buttons}>
          {!isFeeding && (
            <Button title="开始喂食" onPress={() => setIsFeeding(true)} />
          )}

          {isFeeding && (
            <Button title="停止喂食" onPress={() => setIsFeeding(false)} />
          )}
        </View>
      </View>
      <View style={styles.box}>
        <Image source={require('./img/时钟1(1).png')} style={styles.avatar} />
        <Text>定时</Text>
      </View>

      <View style={styles.box}>
        <Image
          source={require('./img/icons8-tully-house-50(1).png')}
          style={styles.avatar}
        />
        <Text>喂食记录</Text>
      </View>

      <View style={styles.box}>
        <Image
          source={require('./img/icon／水箱(1).png')}
          style={styles.avatar}
        />
        <Text>换水时间</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: 1000,
  },

  banner: {
    height: '43%',
    resizeMode: 'cover',
  },

  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
    width: '90%',
    height: '50%',
  },

  time: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  buttons: {
    flexDirection: 'row',
  },

  lastFed: {
    marginVertical: 20,
    fontSize: 14,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    padding: 10,
    marginTop: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
