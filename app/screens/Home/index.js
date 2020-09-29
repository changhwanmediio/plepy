import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Animated,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {
  Image,
  Text,
  Icon,
  HotelItem,
  Card,
  Button,
  SafeAreaView,
  EventCard,
  TextInput
} from '@components';
import {BaseStyle, Images, useTheme} from '@config';
import * as Utils from '@utils';
import styles from './styles';
import {PromotionData, TourData, HotelData} from '@data';
import {useTranslation} from 'react-i18next';

export default function Home({navigation}) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [icons] = useState([
    {
      icon: 'calendar-alt',
      name: '저녁파티',
      route: 'Test',
    },
    {
      icon: 'map-marker-alt',
      name: '액티비티',
      route: 'Tour',
    },
    {
      icon: 'car-alt',
      name: '이색체험투어',
      route: 'OverViewCar',
    },
    {
      icon: 'plane',
      name: 'flight',
      route: 'FlightSearch',
    },
    // {
    //   icon: 'ship',
    //   name: 'cruise',
    //   route: 'CruiseSearch',
    // },
    // {
    //   icon: 'bus',
    //   name: 'bus',
    //   route: 'BusSearch',
    // },
    // {
    //   icon: 'star',
    //   name: 'event',
    //   route: 'DashboardEvent',
    // },
    // {
    //   icon: 'ellipsis-h',
    //   name: 'more',
    //   route: 'More',
    // },
  ]);
  const [relate] = useState([
    {
      id: '0',
      image: Images.event4,
      title: '플피 계곡여행지 모임',
      time: 'Thu, Oct 31, 9:00am',
      location: '대한민국의 숨은 계곡여행지',
    },
    {
      id: '1',
      image: Images.event5,
      title: '플피 완소 카페여행',
      time: 'Thu, Oct 31, 9:00am',
      location: '인생샷을 위한 완소 카페',
    },
  ]);
  const [promotion] = useState(PromotionData);
  const [tours] = useState(TourData);
  const [hotels] = useState(HotelData);
  const [heightHeader, setHeightHeader] = useState(Utils.heightHeader());
  const deltaY = new Animated.Value(0);

  /**
   * @description Show icon services on form searching
   * @author Passion UI <passionui.com>
   * @date 2019-08-03
   * @returns
   */
  const renderIconService = () => {
    return (
      <FlatList
        data={icons}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.itemService}
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate(item.route);
              }}>
              <View
                style={[styles.iconContent, {backgroundColor: colors.card}]}>
                <Icon name={item.icon} size={18} color={colors.primary} solid />
              </View>
              <Text footnote grayColor numberOfLines={1}>
                {t(item.name)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const heightImageBanner = Utils.scaleWithPixel(265);
  const marginTopBanner = heightImageBanner - heightHeader;

  return (
    <View style={{flex: 1}}>
      <View style={[
          styles.new_top_bar,
        ]}>
          <View>
            <Image source={Images.logo} style={styles.new_top_logo} />
          </View>
        <View style={[styles.new_top_bar_input_wrapper,]}>
          <TextInput 
          style={[styles.new_top_textinput,]}
            placeholder={t('플리야 어디갈꺼야?')}
          />
          <Image source={Images.new_icon_01_search} style={styles.new_top_textinput_icon} />
        </View>
      </View>
      <Animated.Image
        source={Images.new_main_banner}
        style={[
          styles.imageBackground,
          {
            height: deltaY.interpolate({
              inputRange: [
                0,
                Utils.scaleWithPixel(100),
                Utils.scaleWithPixel(100),
              ],
              outputRange: [heightImageBanner, heightHeader, 0],
            }),
          },
        ]}
      />
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <ScrollView
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {y: deltaY},
              },
            },
          ])}
          onContentSizeChange={() => setHeightHeader(Utils.heightHeader())}
          scrollEventThrottle={8}>
          <View>
            <View style={[styles.first_button_wrapper]}>
              <TouchableOpacity style={[styles.first_button]}>
                <Image source={Images.new_icon_08} style={styles.first_button_image} />
                <Text style={[styles.first_button_text]}>저녁파티</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.first_button]}>
                <Image source={Images.new_icon_07} style={styles.first_button_image} />
                <Text style={[styles.first_button_text]}>액티비티</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.first_button]}>
                <Image source={Images.new_icon_09} style={styles.first_button_image} />
                <Text style={[styles.first_button_text]}>이색체험·투어</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.first_button]}>
                <Image source={Images.new_icon_06} style={styles.first_button_image} />
                <Text style={[styles.first_button_text]}>관광지</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.first_button]}>
                <Image source={Images.new_icon_05} style={styles.first_button_image} />
                <Text style={[styles.first_button_text]}>숙박</Text>
              </TouchableOpacity>
            </View>
            {/* <View
              style={[
                styles.searchForm,
                {
                  marginTop: 332,
                  backgroundColor: colors.background,
                  borderColor: colors.border,
                  shadowColor: colors.border,
                },
              ]}>
              {renderIconService()}
            </View> */}
          </View>





          {/*플리가 좋아하는 여행모임*/}
          <View>
            <View  style={styles.new_title_big_wrapper}>
              <View style={styles.new_title_wrapper} >
                <Text title3 semibold style={styles.titleView}>
                  {t('플리가 좋아하는 여행모임')}
                </Text>
                <Image source={Images.new_icon_04} style={styles.new_title_image} />
              </View>
              <Button style={styles.new_button_all}><Text style={styles.new_button_all_text}>모두보기</Text></Button>
            </View>
            {/* <FlatList
              contentContainerStyle={{paddingLeft: 5, paddingRight: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={promotion}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <Card
                  style={[styles.promotionItem, {marginLeft: 15}]}
                  image={item.image}
                  onPress={() => navigation.navigate('HotelDetail')}>
                  <Text subhead whiteColor>
                    {item.title1}
                  </Text>
                  <Text title2 whiteColor semibold>
                    {item.title2}
                  </Text>
                  <View style={styles.contentCartPromotion}>
                    <Button
                      style={styles.btnPromotion}
                      onPress={() => {
                        navigation.navigate('PreviewBooking');
                      }}>
                      <Text body2 semibold whiteColor>
                        {t('book_now')}
                      </Text>
                    </Button>
                  </View>
                </Card>
              )}
            /> */}
          </View>
          <FlatList
              columnWrapperStyle={{paddingLeft: 5, paddingRight: 20}}
              numColumns={2}
              data={hotels}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <HotelItem
                  grid
                  image={item.image}
                  name={item.name}
                  location={item.location}
                  price={item.price}
                  available={item.available}
                  rate={item.rate}
                  rateStatus={item.rateStatus}
                  numReviews={item.numReviews}
                  services={item.services}
                  style={{marginLeft: 15, marginBottom: 15}}
                  onPress={() => navigation.navigate('HotelDetail')}
                />
              )}
            />




          {/*무슨모임*/}
          <View>
            <View  style={styles.new_title_big_wrapper}>
              <View style={styles.new_title_wrapper} >
                <Text title3 semibold style={styles.titleView}>
                  {t('무슨모임, 플피 Start!')}
                </Text>
                <Image source={Images.new_icon_04} style={styles.new_title_image} />
              </View>
              <Button style={styles.new_button_all}><Text style={styles.new_button_all_text}>모두보기</Text></Button>
            </View>
            <FlatList
              contentContainerStyle={{
                paddingRight: 20,
                paddingLeft: 5,
              }}
              horizontal={true}
              data={relate}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <EventCard
                  image={item.image}
                  title={item.title}
                  time={item.time}
                  location={item.location}
                  onPress={() => navigation.navigate('EventDetail')}
                  style={{marginLeft: 15}}
                />
              )}
            />  
          </View>
          {/* <View>
            <FlatList
              contentContainerStyle={{
                paddingRight: 20,
                paddingLeft: 5,
              }}
              horizontal={true}
              data={relate}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <EventCard
                  image={item.image}
                  title={item.title}
                  time={item.time}
                  location={item.location}
                  onPress={() => navigation.navigate('EventDetail')}
                  style={{marginLeft: 15}}
                />
              )}
            />
          </View> */}





          <View style={[styles.new_gray_line]}></View>





          {/*여행지고민*/}
          <View>
            <View  style={styles.new_title_big_wrapper}>
              <View style={styles.new_title_wrapper} >
                <Text title3 semibold style={styles.titleView}>
                  {t('여행지 고민인 사람 접어!')}
                </Text>
              </View>
            </View>
            <FlatList
              contentContainerStyle={{
                paddingRight: 20,
                paddingLeft: 5,
              }}
              horizontal={true}
              data={relate}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <EventCard
                  image={item.image}
                  title={item.title}
                  time={item.time}
                  location={item.location}
                  onPress={() => navigation.navigate('EventDetail')}
                  style={{marginLeft: 15}}
                />
              )}
            />  
          </View>




          <View style={[styles.new_gray_line]}></View>




          {/*잘놀았으면*/}
          <View>
            <View  style={styles.new_title_big_wrapper}>
              <View style={styles.new_title_wrapper} >
                <Text title3 semibold style={styles.titleView}>
                  {t('잘 놀았으면 꿀잠은 여기여기!')}
                </Text>
                <Image source={Images.new_icon_04} style={styles.new_title_image} />
              </View>
              <Button style={styles.new_button_all}><Text style={styles.new_button_all_text}>모두보기</Text></Button>
            </View>
            <FlatList
              columnWrapperStyle={{paddingLeft: 5, paddingRight: 20}}
              numColumns={2}
              data={hotels}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <HotelItem
                  grid
                  image={item.image}
                  name={item.name}
                  location={item.location}
                  price={item.price}
                  available={item.available}
                  rate={item.rate}
                  rateStatus={item.rateStatus}
                  numReviews={item.numReviews}
                  services={item.services}
                  style={{marginLeft: 15, marginBottom: 15}}
                  onPress={() => navigation.navigate('HotelDetail')}
                />
              )}
            />
          </View>





          {/* Promotion */}
          <View>
            <Image source={Images.banner1} style={styles.promotionBanner} />
          </View>




          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}












