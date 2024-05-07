import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import sach1 from '../../assets/img/book/sach-1.jpg';
import Comment from '../../components/Comment';
import {limitWords} from '../../utils/functions/ResumeLimited';
import MyButton from '../../components/Button';
import HeaderNavigation from '../../components/HeaderNavigation';

function DetailsBook({navigation}) {
  const resume =
    ' Nguồn gốc các loài là tên rút gọn của cuốn sách Về nguồn gốc các\
  loài qua con đường chọn lọc tự nhiên, hay sự bảo tồn những chủng\
  ưu thế trong đấu tranh sinh tồn (của Charles Darwin, xuất bản năm\
  1859). Đây là một cuốn sách khoa học hiếm có khi bán hết 1250 bản\
  in lần đầu trong vòng một ngày và trong một thời gian ngắn đã là\
  “rung chuyển” cả thế giới. Cuốn sách này là kết quả của những qua\
  sát của Darwin trong chuyến đi gần 5 năm, từ 1831 đến 1836, trê\
  con tàu biển Beagle vòng quanh thế giới, cùng với những suy tư v\
  nghiên cứu của ông trong hai mươi năm sau đó, trong đó ông đặt vấ\
  đề có tính quyết định về biến đổi luận hay sự tiến hóa. Sách củ\
  ông đã được xuất bản nhiều lần, sửa đổi, liên tục cập nhật cho đế\
  khi ông mất. “Chúng ta vẫn còn biết ít về mối quan hệ qua lại củ\
  vô số cá thể trên thế giới trong suốt nhiều giai đoạn địa chất đ\
  qua. Mặc dù còn nhiều điều mơ hồ và sẽ còn mơ hồ lâu dài nữa\
  nhưng tôi vẫn tán thành một cách chắc chắn là, sau khi nghiên cứ\
  thận trọng và phán xét vô tư những việc mà tôi có thể làm được\
  quan điểm, mà hầu hết các nhà tự nhiên học đều tán thành cũng nh\
  tôi trước đây đã tán thành – cho rằng các loài được sáng tạo r\
  một cách độc lập – là sai lầm. Tôi hoàn toàn tin chắc rằng cá\
  loài không phải là bất biến; nhưng những loài thuộc vầ cái đượ\
  gọi là các chủng giống nhau là những hậu duệ trực hệ của nhữn\
  loài khác đã tuyệt chủng hoàn toàn, cũng tương tự như là nhữn\
  biến chủng đã được công nhận của bất cứ loài nào là hậu duệ củ\
  những loài đó. Hơn nữa, tôi tin chắc rằng Chọn lọc Tự nhiên l\
  nguyên nhân chính nhưng không phải là nguyên nhân duy nhất của s\
  biến đổi.” (Trích Dẫn nhập, Nguồn gốc các loài, tái bản lần th\
  nhất, NXB Tri thức, 2011)';
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#141414',
      }}>
      <HeaderNavigation titleHeader={'Book details'} />
      <ScrollView style={{position: 'relative'}}>
        <View
          style={{
            height: 200,
            opacity: 0.1,
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}>
          <Image
            source={sach1}
            style={{
              width: '100%',
              height: 180,
              objectFit: 'cover',
              marginTop: 10,
              position: 'absolute',
            }}
          />
        </View>
        <Image
          source={sach1}
          style={{
            width: 150,
            height: 200,
            marginTop: 10,
            position: 'absolute',
            borderRadius: 8,
            borderWidth: 2,
            borderColor: '#fff',
            top: 70,
          }}
        />
        {/* information of book */}
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '60%',
            minHeight: 100,
            padding: 15,
            alignSelf: 'center',
            justifyContent: 'space-between',
            borderRadius: 8,
            right: 5,
            top: 150,
            position: 'absolute',
          }}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#fff'}}>
            Nguồn gốc các loài
          </Text>

          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              fontStyle: 'italic',
              color: '#fff',
            }}>
            Charles Darwins
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            padding: 10,
            marginTop: 80,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: '#fff',
              // marginBottom: 10,
            }}>
            Resume
          </Text>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#ccc',
                borderLeftWidth: 2,
                borderLeftColor: '#ccc',
                paddingLeft: 10,
                marginTop: 5,
                textAlign: 'justify',
              }}>
              {limitWords(resume)}
            </Text>
          </View>
        </View>
        {/* comment part */}
        <ScrollView>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Comments (2)
          </Text>
          <Comment />
          <Comment />
          <Comment />
        </ScrollView>
      </ScrollView>
      <View>
        <MyButton
          titleBtn={'Borrow'}
          onClick={() =>
            navigation.navigate('BorrowBook', {
              title: 'Jujutsu kaisen',
              author: 'Akutami Gege',
              category: 'Manga',
              imageUrl: sach1,
            })
          }
        />
      </View>
    </View>
  );
}

export default DetailsBook;
