import { Button, Input, Form, Upload, message } from "antd";

import { ComponentWrapper } from "@@common/ReactComponentWrapper";
import { reaxel_edit_profile } from "@@reaxes/user/edit-profile";
import { reaxel_wallet } from "@@reaxes/wallet/wallet";

import { AddSocialBtn, ProfileFooterBtn } from "../Test/dxz-social-general";

import less from "./index.module.less";

const Subtitle = (props) => {
  return (
    <>
      <span className={less.subtitle}>{props.title}</span>
    </>
  );
};

const EditProfile = ComponentWrapper(() => {
  const [form] = Form.useForm();

  const reax_edit_profile = reaxel_edit_profile();
  const { userInfo } = reax_edit_profile.editProfileStore;

  const [avatarSrc, setAvatarSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  const onFinish = useCallback(() => {
    setLoading(true);

    form
      .validateFields()
      .then((data) => {
        if (!data) return;

        const { displayName, bio, customUrl, socialLinks } = data;

        // 过滤冗余字段
        const payload = {
          ...(displayName ? { displayName } : null),
          ...(bio ? { bio } : null),
          ...(customUrl ? { customUrl } : null),
          ...(socialLinks ? { socialLinks } : null),
        };

        reax_edit_profile.saveProfile(payload);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, [form, reax_edit_profile]);

  const onAddSocialAccount = () => {
    console.log("add more");
  };

  const verifyImageBeforeSubmit = useCallback((file) => {
    if (file instanceof File || file.data) {
      if (!/^.*\.(jpg|gif|jpeg|png|webp)$/.test(file.name)) {
        message.warning("Please upload the correct format");
        return false;
      } else if (file.size / 1024 / 1024 > 15) {
        message.warning("Image must smaller than 15MB!");
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }, []);

  const customRequest = useCallback(
    async (option) => {
      const { file } = option;
      if (file instanceof File || file.data) {
        if (verifyImageBeforeSubmit(file)) {
          setLoading(true);

          reax_edit_profile.uploadImage(file).then(() => {
            setLoading(false);
            const data = reax_edit_profile.editProfileStore;
            const { userInfo } = data;
            setAvatarSrc(userInfo.iconUrl);
          });
        }
      } else {
        setLoading(false);
        return false;
      }
    },
    [reax_edit_profile, verifyImageBeforeSubmit]
  );

  // 初始化表单信息
  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  useEffect(() => {
    if (!userInfo) return;
    setInitialValues(userInfo);
  }, [userInfo]);

  return (
    <div className={less.editProfileBox}>
      <h1 className={less.Title}>Edit profile</h1>
      <p className={less.intro}>
        You can set preferred display name, create{" "}
        <span className={less.boldSpan}> your profile URL</span> and manage
        other personal settings.
      </p>
      <div className={less.mainField}>
        <div className={less.profilePhoto}>
          {avatarSrc ? (
            <img
              src={avatarSrc}
              alt="avatar"
              className={less.profilePhotoLeft}
            />
          ) : (
            <div className={less.profilePhotoLeftEmpty} />
          )}
          <div className={less.profilePhotoRight}>
            <span className={less.photoTitle}>Profile photo</span>
            <p className={less.avatarRule}>
              We recommend an image of at least 400x400.
              <br />
              Gifs work too 🙌
            </p>
            <Upload showUploadList={false} customRequest={customRequest}>
              <Button
                loading={loading}
                style={{
                  border: "2px solid #e6e8ec",
                  padding: "12px 16px",
                  // width: "81px",
                  height: "40px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "16px",
                  color: "#23262f",
                }}
              >
                Upload
              </Button>
            </Upload>
          </div>
        </div>
        <Form
          form={form}
          name="profile-form"
          onFinish={onFinish}
          initialValues={initialValues}
        >
          <div className={less.accountInfo}>
            <p className={less.accountTitle_1}>Account info</p>
            <Subtitle title="display name"></Subtitle>
            <Form.Item
              name="displayName"
              rules={[{ max: 32, message: "32 max" }]}
            >
              <Input
                className={less.editInput}
                placeholder="Enter your display name"
                style={{
                  background: "#f4f4f4",
                  borderRadius: "12px",
                  width: "100%",
                  height: "48px",
                  padding: "12px",
                  border: "none",
                  color: "#777e91",
                  fontSize: "14px",
                }}
              />
            </Form.Item>
            <Subtitle title="Custom url"></Subtitle>
            <Form.Item
              name="customUrl"
              rules={[{ max: 100, message: "100 max" }]}
            >
              <Input
                className={less.editInput}
                prefix="Daotion.io/"
                placeholder="Your custom URL"
                style={{
                  background: "#f4f4f4",
                  borderRadius: "12px",
                  width: "100%",
                  height: "48px",
                  padding: "12px",
                  border: "none",
                  color: "#777e91",
                  fontSize: "14px",
                }}
              />
            </Form.Item>
            <Subtitle title="Bio"></Subtitle>
            <Form.Item name="bio" rules={[{ max: 160, message: "160 max" }]}>
              <Input
                className={less.editInput}
                placeholder="About yourself in a few words"
                style={{
                  background: "#f4f4f4",
                  borderRadius: "12px",
                  width: "100%",
                  height: "48px",
                  padding: "12px",
                  border: "none",
                  color: "#777e91",
                  fontSize: "14px",
                }}
              />
            </Form.Item>
            <p className={less.accountTitle_2}>Social</p>
            <Subtitle title="Portfolio or website"></Subtitle>
            <Form.Item name="socialLinks">
              <Input
                className={less.editInput}
                placeholder="Enter URL"
                style={{
                  background: "#f4f4f4",
                  borderRadius: "12px",
                  width: "100%",
                  height: "48px",
                  padding: "12px",
                  border: "none",
                  color: "#777e91",
                  fontSize: "14px",
                }}
              />
            </Form.Item>
            <Subtitle title="Twitter"></Subtitle>
            <Form.Item name="twitter">
              <Input
                className={less.editInput}
                placeholder="@twitter username"
                style={{
                  background: "#f4f4f4",
                  borderRadius: "12px",
                  width: "100%",
                  height: "48px",
                  padding: "12px",
                  border: "none",
                  color: "#777e91",
                  fontSize: "14px",
                }}
              />
            </Form.Item>
            <AddSocialBtn onClick={onAddSocialAccount} />
            <footer className={less.lastIntro}>
              To update your settings you should sign message through your
              wallet. Click 'Update profile' then sign the message
            </footer>
            <div className={less.divider}></div>
            <ProfileFooterBtn
              text="Update Profile"
              htmlType="submit"
              // onClick={onFinish}
            />
          </div>
        </Form>
      </div>
    </div>
  );
});

export default EditProfile;
