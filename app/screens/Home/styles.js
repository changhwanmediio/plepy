import {StyleSheet, Dimensions} from 'react-native';
import * as Utils from '@utils';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default StyleSheet.create({
  imageBackground: {
    height: 265,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#ffffff',
    marginTop: 75,
  },
  searchForm: {
    padding: 10,
    borderRadius: 0,
    borderWidth: 0,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    borderBottomWidth: 10,
    borderBottomColor: '#f6f6f6'
  },
  contentServiceIcon: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contentCartPromotion: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  btnPromotion: {
    height: 25,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  contentHiking: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  promotionBanner: {
    height: Utils.scaleWithPixel(100),
    width: '100%',
    marginTop: 10,
  },
  line: {
    height: 1,
    marginTop: 10,
    marginBottom: 15,
  },
  iconContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  itemService: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 10,
  },
  promotionItem: {
    width: Utils.scaleWithPixel(200),
    height: Utils.scaleWithPixel(250),
  },
  tourItem: {
    width: Utils.scaleWithPixel(135),
    height: Utils.scaleWithPixel(160),
  },
  titleView: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
    marginRight:1,
  },




  new_top_bar: {
    flexDirection: 'row',
    height: 61, 
    marginHorizontal: 20,
    paddingTop: 10
  },
  new_top_logo: {
    height: 51,
    width: 57,
    marginRight: 10,
  },
  new_top_bar_input_wrapper: {
    width: screen.width * 1 - 107,
    height: 46,
    flexDirection: 'row',
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 1,
    paddingRight: 10
  },
  new_top_textinput: {
    width: screen.width * 1 - 137,
    backgroundColor:'white', 
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 1
  },
  new_top_textinput_icon: {
    width:20, height:20,
    marginTop: 12,
  },
  first_button_wrapper: {
    marginTop: 352,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomColor: '#f6f6f6',
    borderBottomWidth: 13
  },
  first_button: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  first_button_image: {
    width: 50, height: 50,
    marginBottom: 10
  },
  first_button_text: {
    fontSize: 12,
    color: '#656565',
  },
  new_title_wrapper: {
    flexDirection: 'row',
    alignItems:'center'
  },
  new_title_image: {
    width: 27, height: 27,
    marginTop: 5
  },
  new_button_all: {
    backgroundColor: '#f7f7f7',
    borderRadius: 30,
    width: 80,
    height: 30,
    marginTop: 13,
  },
  new_button_all_text: {
    color: '#b6b6b6',
    fontSize: 11,
    fontWeight: '300'
  },
  new_title_big_wrapper: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingRight: 20,
    marginBottom: 15
  }
});
