import { Button, Checkbox, Form, Input } from 'antd';


const AddNewVenue = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };

  return (
    <div style={{"marginTop" : 100}}>
        <h1>Yeni Mekan Ekle</h1>
    <Form
    className='mt-20'
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
        }}
        onFinish={onFinish}
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
        Mekani olustur
      </Button>
    </Form.Item>


        
      </Form>
      </div>
  )
}

export default AddNewVenue
