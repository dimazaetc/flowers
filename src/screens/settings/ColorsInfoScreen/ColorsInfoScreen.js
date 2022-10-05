import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Modal from "react-native-modal";
import StyledText from "../../../atoms/StyledText";

const ColorsInfoScreen = ({ modalVisible, setModalVisible }) => {
  const { fontScale } = useWindowDimensions();
  const styles = makeStyles(fontScale);
  return (
    <View style={styles.centeredView}>
      <Modal
        backdropOpacity={0.8}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.p}>
              <StyledText style={styles.title}>
                Значення кольору квітів
              </StyledText>
              <StyledText style={styles.descr}>
                Мова квітів розглядає значення кожної окремо взятої рослини,
                тому відрізнятися може не тільки символіка однієї і тієї ж
                квітки різних відтінків, але і значення різних рослин одного і
                того ж кольору. Говорячи про те, який колір квітів що означає,
                слід пам’ятати про відносність цих трактувань.
              </StyledText>
            </View>
            <View style={styles.p}>
              <StyledText style={styles.title}>Білий</StyledText>
              <StyledText style={styles.descr}>
                Будучи символом чистоти і непорочності в слов’янській культурі,
                в східних країнах білий колір вважається траурним. Букети в
                світлих тонах прийнято дарувати юним дівчатам, нареченим і
                молодим мамам як символ свіжості і краси. У композиціях цей
                колір вважається нейтральним. Людям у віці білі букети не
                підходять.
              </StyledText>
            </View>
            <View style={styles.p}>
              <StyledText style={styles.title}>Жовтий</StyledText>
              <StyledText style={styles.descr}>
                Деякі поширені трактування відтінків помилкові. Джерелом
                невірних тлумачень кольору можуть бути культурні феномени,
                наприклад, пісня про тюльпани: через неї люди неправильно
                сприймають жовтий колір квітів, значення якого насправді не має
                відношення до розлуки. Правильне тлумачення жовтого кольору –
                вираз теплих дружніх і родинних почуттів. Яскраві сонячні квіти
                можна дарувати мамі, бабусі, подрузі і колезі. Хорошим
                подарунком стане жовта троянда: значення монобукета з них можна
                розглядати як подяку за добрі взаємини.
              </StyledText>
            </View>
            <View style={styles.p}>
              <StyledText style={styles.title}>Помаранчевий</StyledText>
              <StyledText style={styles.descr}>
                Насичений оранжевий символізує духовну силу, гордість і велич
                влади. Монобукети в яскравих помаранчевих тонах дарують при
                підвищеннях, творчі успіхи, а також в тих випадках, коли хочуть
                побажати одержувачу квітів удачі. Помаранчеві бутони можна
                дарувати і чоловікам, якщо скомбінувати їх з іншими рослинами
                холодних відтінків.
              </StyledText>
            </View>
            <View style={styles.p}>
              <StyledText style={styles.title}>Червоний</StyledText>
              <StyledText style={styles.descr}>
                Яскраво-червоний колір говорить про пристрасть, бажання і
                сильних почуттях, тому монобукети в червоних тонах прийнято
                дарувати подружжю і партнерам. В окремих випадках червоні квіти
                можуть символізувати внутрішню свободу, силу духу і волю до
                перемоги. Це дозволяє дарувати композиції з червоними відтінками
                тим, кого хочеться привітати з важливим досягненням.
              </StyledText>
            </View>
            <View style={styles.p}>
              <StyledText style={styles.title}>Рожевий</StyledText>
              <StyledText style={styles.descr}>
                Рожевий квітки говорить про ніжні почуття, що зароджується
                кохання, зворушливу турботу і тонкої красі. Букети в м’яких
                рожевих відтінках дарують молодим дівчатам, віддаючи перевагу
                дрібним напівзакритим бутонам. Більш насичені варіанти рожевого
                підходять для дорослих жінок. У цих випадках вибирають рослини з
                великими суцвіттями, які розкрилися більше ніж наполовину або
                повністю.
              </StyledText>
            </View>
            <View style={styles.p}>
              <StyledText style={styles.title}>Фіолетовий</StyledText>
              <StyledText style={styles.descr}>
                Цей насичений колір асоціюється з величністю, гідністю і
                чуттєвістю. Всі відтінки фіолетового підходять жінкам в зрілому
                віці: мамі, свекрухи, тещі, колезі або викладачеві. Також
                доречно дарувати фіолетові квіти чоловікам різного віку.
              </StyledText>
            </View>
            <View style={styles.p}>
              <StyledText style={styles.title}>Синій</StyledText>
              <StyledText style={styles.descr}>
                Холодні композиції неоднозначні щодо того, що означає колір
                квітів в них: з одного боку синій вважається символом туги, з
                іншого – знаком цілеспрямованості, впевненості і спокою. Букет
                синіх кольорів може розповісти людині, що на дарувальника можна
                покластися в будь-якій ситуації. Композиції в цьому холодному
                тоні добре підійдуть чоловікам, а в жіночих букетах сині бутони
                комбінують з нейтральними або теплими відтінками.
              </StyledText>
            </View>
            <View style={styles.p}>
              <StyledText style={styles.title}>Зелений</StyledText>
              <StyledText style={styles.descr}>
                В природі існує всього кілька видів квітів зелених відтінків,
                тому такий букет стане оригінальним подарунком для творчих
                особистостей, які цінують все стильне і незвичайне. Зелений
                колір символізує мир, красу і силу життя, служить нагадуванням
                про важливість гармонії з оточуючими.
              </StyledText>
            </View>
            <View style={styles.p}>
              <StyledText style={styles.title}>Чорний</StyledText>
              <StyledText style={styles.descr}>
                Традиційне значення чорного кольору в слов’янській культурі –
                траур, в той час як на Сході все відтінки чорного вважаються
                знаком чистоти. Темні букети відправляють в знак поваги
                покійним, проте в залежності від ситуації ефектні композиції з
                чорними кольорами можуть дарувати чоловікам або сміливим,
                екстравагантним жінкам.
              </StyledText>
            </View>
            <View style={styles.p}>
              <StyledText style={styles.title}>Двобарвні букети</StyledText>
              <StyledText style={styles.descr}>
                Звична трактування відтінків більшою мірою відноситься до
                монобукетам. Композиції, в яких скомбіновані два кольори, не
                прийнято інтерпретувати відповідно до мови квітів. Двоколірні
                букети зазвичай дарують жінкам, і флористи не рекомендують
                розглядати такі композиції як приховане послання і намагатися
                дізнатися, що означає колір подарованих квітів. Єдино правильна
                трактування такого подарунка – бажання подарувати одержувачу
                букета радість і задоволення.
              </StyledText>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default ColorsInfoScreen;
const makeStyles = (fontScale) =>
  StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5,
    },
    modalView: {
      elevation: 24,
      backgroundColor: "#00000090",
      margin: 20,
      padding: 15,
      borderRadius: 20,
    },
    title: {
      fontSize: 20 / fontScale,
      textAlign: "center",
      marginBottom: 10,
    },
    descr: {
      textAlign: "left",
      fontSize: 14 / fontScale,
    },
    p: {
      marginBottom: 10,
    },
  });
