import { useParams } from "react-router-dom";
import VenueDataService from "../services/VenueDataService";
import React from "react";
import VenueReducer from "../services/VenueReducer";
import InputWithLabel from "./InputWithLabel";
import { Button, Checkbox, Form, Input } from 'antd';
import '../App.css'

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



function AddUpdateVenue() {
  const params = useParams()
  const id = params.id;

  const [venues, dispatchVenues] = React.useReducer(VenueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  React.useEffect(() => {
    dispatchVenues({ type: "FETCH_INIT" });
    try {

      VenueDataService.listJsonVenues().then((result) => {
        dispatchVenues({
          type: "FETCH_SUCCESS",
          payload: result.data,
        });
      });
    } catch {
      dispatchVenues({ type: "FETCH_FAILURE" });
    }
  }, []);

  const filteredVenue = venues.data.filter((result) =>
    (result.id == id)
  )
  console.log(filteredVenue);
  const onFinish = (values) => {
    console.log('Success:', values);
    const data = {
      "address" : values.address,
      "coordinates" : [values.enlem, values.boylam],
      "distance" : values.distance,
      "foodanddrink" : values.foodanddrink.split(','),
      "hours" : [{"days" : values.gunler1, "open": values.acilis1, "close": values.kapanis1}, 
                  {"days" : values.gunler2, "open": values.acilis2, "close": values.kapanis2}],
      "id" : id,
      "name" : values.name,
      "rating": values.rating
    }

    dispatchVenues({ type: "UPDATE_VENUE", payload: data });


  };

  if (venues.isLoading) {
    return <div>Loading...</div>;
  }
  

  return (
    
    <>
      <h1 className="mt-40" style={{"marginTop": 100}}>{filteredVenue[0]?.name}</h1>
      <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
          name: filteredVenue[0]?.name.toString() || "loading",
          rating: filteredVenue[0]?.rating,
          distance: filteredVenue[0]?.distance,
          foodanddrink: filteredVenue[0]?.foodanddrink.join(','),
          address: filteredVenue[0]?.address,
          enlem: filteredVenue[0]?.coordinates[0],
          boylam: filteredVenue[0]?.coordinates[1],
          gunler1: filteredVenue[0]?.hours[0].days,
          acilis1: filteredVenue[0]?.hours[0].open,
          kapanis1: filteredVenue[0]?.hours[0].close,
          gunler2: filteredVenue[0]?.hours[1].days,
          acilis2: filteredVenue[0]?.hours[1].open,
          kapanis2: filteredVenue[0]?.hours[1].close,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Mekan Adi"
          name="name"
          
          rules={[
            {
              message: 'Please input Mekan Adi',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Rating"
          name="rating"
          rules={[
            {
              message: 'Please input rating',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Distance"
          name="distance"
          rules={[
            {
              message: 'Please input distance',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Imkanlar"
          name="foodanddrink"
          rules={[
            {
              message: 'Please input food and drinks',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              message: 'Please input address',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Enlem"
          name="enlem"
          rules={[
            {
              message: 'Please input enlem',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Boylam"
          name="boylam"
          rules={[
            {
              message: 'Please input boylam',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Gunler 1"
          name="gunler1"
          rules={[
            {
              message: 'Please input Gunler 1',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Acilis 1"
          name="acilis1"
          rules={[
            {
              message: 'Please input acilis 1',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Kapanis 1"
          name="kapanis1"
          rules={[
            {
              message: 'Please input Kapanis 1',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="kapali1"
          label="Kapali 1"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox />
        </Form.Item>

        <Form.Item
          label="Gunler 2"
          name="gunler2"
          rules={[
            {
              message: 'Please input Gunler 2',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Acilis 2"
          name="acilis2"
          rules={[
            {
              message: 'Please input acilis 2',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Kapanis 2"
          name="kapanis2"
          rules={[
            {
              message: 'Please input Kapanis 2',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="kapali2"
          label="Kapali 2"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox />
        </Form.Item>

        <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Mekani Guncelle
      </Button>
    </Form.Item>


        
      </Form>
      </div>
      
      
      {/* <form className="form form-horizontal">

        <InputWithLabel id={filteredVenue[0]?.id} label={"Mekan Adi"} type={"text"} value={filteredVenue[0]?.name} isFocused={false} key={filteredVenue[0]?.id + '1'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"rating"} type={"text"} value={filteredVenue[0]?.rating} isFocused={false} key={filteredVenue[0]?.id + '2'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Distance"} type={"text"} value={filteredVenue[0]?.distance} isFocused={false} key={filteredVenue[0]?.id + '3'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Imkanlar"} type={"text"} value={filteredVenue[0]?.foodanddrink} isFocused={false} key={filteredVenue[0]?.id + '4'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Address"} type={"text"} value={filteredVenue[0]?.address} isFocused={false} key={filteredVenue[0]?.id} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Enlem"} type={"text"} value={filteredVenue[0]?.coordinates[0].toFixed(2)} isFocused={false} key={filteredVenue[0]?.id + '5'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Boylam"} type={"text"} value={filteredVenue[0]?.coordinates[1].toFixed(2)} isFocused={false} key={filteredVenue[0]?.id + '6'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Gunler 1"} type={"text"} value={filteredVenue[0]?.hours[0].days} isFocused={false} key={filteredVenue[0]?.id + '7'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Acilis 1"} type={"text"} value={filteredVenue[0]?.hours[0].open} isFocused={false} key={filteredVenue[0]?.id + '8'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Kapanis 1"} type={"text"} value={filteredVenue[0]?.hours[0].close} isFocused={false} key={filteredVenue[0]?.id + '9'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Kapali 1"} type={"checkbox"} value={""} isFocused={false} key={filteredVenue[0]?.id + '10'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Gunler 2"} type={"text"} value={filteredVenue[0]?.hours[1].days} isFocused={false} key={filteredVenue[0]?.id + '11'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Acilis 2"} type={"text"} value={filteredVenue[0]?.hours[1].open} isFocused={false} key={filteredVenue[0]?.id + '12'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"Kapanis 2"} type={"text"} value={filteredVenue[0]?.hours[1].close} isFocused={false} key={filteredVenue[0]?.id + '13'} onInputChange={() => { }} />
        <InputWithLabel id={filteredVenue[0]?.id} label={"kapali 2"} type={"checkbox"} value={''} isFocused={false} key={filteredVenue[0]?.id + '14'} onInputChange={() => { }} />
        <button className="btn btn-success" onClick={() => { }}>Mekani Guncelle</button>
      </form> */}
    </>
  );
}

export default AddUpdateVenue;
