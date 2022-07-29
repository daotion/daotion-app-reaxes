import { Button, Form, Input, message, Upload } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";

import { ComponentWrapper } from "@@common/ReactComponentWrapper";
import { reaxel_edit_profile } from "@@reaxes/user/edit-profile";
import { reaxel_edit_space_social_settings } from "@@pages/Test/dxz-Space-Settings/reaxel_edit_space_social_settings";

import {
  AddSocialBtn,
  ProfileFooterBtn,
} from "@@pages/Test/dxz-Space-Settings";

import less from "./index.module.less";
import { reaxel_wallet } from "@@reaxes";

const Subtitle = (props) => {
  return (
    <>
      <span className={less.subtitle}>{props.title}</span>
    </>
  );
};

const INPUT_STYLE = {
  background: "#f4f4f4",
  borderRadius: "12px",
  width: "100%",
  height: "48px",
  padding: "12px",
  border: "none",
  color: "#777e91",
  fontSize: "14px",
};

const EditProfile = ComponentWrapper(() => {
  const [form] = Form.useForm();

  const reax_edit_space_social_settings = reaxel_edit_space_social_settings();
  const reax_edit_profile = reaxel_edit_profile();
  const reax_wallet = reaxel_wallet();

  const { userInfo } = reax_edit_profile.editProfileStore;

  const [socialLinksArr, setSocialLinksArr] = useState<string[]>([]);
  const [avatarSrc, setAvatarSrc] = useState("");
  const [avatarLoading, setAvatarLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  const onFinish = useCallback(() => {
    if (avatarLoading || reax_edit_profile.editProfileStore.loading) return;

    form
      .validateFields()
      .then((data) => {
        if (!data) return;

        const { displayName, bio, customUrl, links, website, twitter } = data;

        const socialLinks = links.reduce((acc, curr) => {
          const currKey = Object.keys(curr)[0];
          if (currKey !== "website") {
            acc[currKey] = curr[currKey];
          }
          return acc;
        }, {});

        const payload = {
          displayName: displayName || "",
          bio: bio || "",
          customUrl: customUrl || "",
          socialLinks: JSON.stringify({
            ...socialLinks,
            website,
            twitter,
          }),
        };

        reax_edit_profile
          .saveProfile(payload)
          .then(() => {
            message.success("Update success");
          })
          .catch((e) => {
            message.error("Update failed");
            console.error(e);
          });
      })
      .catch((e) => {
        console.error(e);
        message.error("Update failed");
      });
  }, [form, reax_edit_profile]);

  const onAddSocialAccount = (type: string) => {
    // 模拟社交账号选择弹窗
    setSocialLinksArr((prev) => [...prev, type]);
  };

  const verifyImageBeforeSubmit = useCallback((file) => {
    if (!reax_wallet?.account) {
      reax_wallet.connectWallet().then(() => {
        // setLoading(false);
      });
      return false;
    }
    if (file instanceof File || file.data) {
      if (!/^.*\.(jpg|gif|jpeg|png|webp)$/.test(file.name)) {
        message.warning("Please upload the correct format").then(() => {});
        return false;
      } else if (file.size / 1024 / 1024 > 15) {
        message.warning("Image must smaller than 15MB!").then(() => {});
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
          setAvatarLoading(true);

          reax_edit_profile
            .uploadImage(file)
            .then(() => {
              setAvatarLoading(false);
              const data = reax_edit_profile.editProfileStore;
              const { userInfo } = data;
              setAvatarSrc(userInfo.iconUrl);
              message.success("Upload success");
            })
            .catch((e) => {
              console.error(e);
              message.error("Upload failed");
            });
        }
      } else {
        setAvatarLoading(false);
        return false;
      }
    },
    [reax_edit_profile, verifyImageBeforeSubmit]
  );

  // 初始化表单信息
  useEffect(() => {
    if (!initialValues) return;
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  useEffect(() => {
    if (!userInfo) return;

    const { iconUrl, socialLinks } = userInfo;

    const objSocialLinks =
      socialLinks?.length > 0 ? JSON.parse(socialLinks) : {};

    setSocialLinksArr(
      Object.keys(objSocialLinks).filter(
        (each) => each !== "website" && each !== "twitter"
      )
    );
    const links = Object.keys(objSocialLinks).reduce((acc, curr) => {
      if (curr !== "website" && curr !== "twitter") {
        acc.push({
          [curr]: objSocialLinks[curr],
        });
      }

      return acc;
    }, []);

    // setInitialValues(userInfo);
    setInitialValues(() => {
      return {
        ...userInfo,
        website: objSocialLinks.website,
        twitter: objSocialLinks.twitter,
        links,
      };
    });

    // 头像的更新与提交表单的接口不是同一个，初始的展示需要单独设置一下
    setAvatarSrc(iconUrl);
  }, [userInfo]);

  // 初始化社交媒体选择弹窗内容
  useEffect(() => {
    socialLinksArr.forEach((each) => {
      reax_edit_space_social_settings.addSocialItem(each);
    });
  }, [socialLinksArr]);

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
                loading={avatarLoading}
                style={{
                  border: "2px solid #e6e8ec",
                  padding: "12px 16px",
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
                style={INPUT_STYLE}
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
                style={INPUT_STYLE}
              />
            </Form.Item>
            <Subtitle title="Bio"></Subtitle>
            <Form.Item name="bio" rules={[{ max: 160, message: "160 max" }]}>
              <Input
                className={less.editInput}
                placeholder="About yourself in a few words"
                style={INPUT_STYLE}
              />
            </Form.Item>
            <p className={less.accountTitle_2}>Social</p>
            <Subtitle title="Portfolio or website"></Subtitle>
            <Form.Item name="website">
              <Input
                className={less.editInput}
                placeholder="Enter URL"
                style={INPUT_STYLE}
              />
            </Form.Item>
            <Subtitle title="Twitter"></Subtitle>
            <Form.Item name="twitter">
              <Input
                className={less.editInput}
                placeholder="@twitter username"
                style={INPUT_STYLE}
              />
            </Form.Item>
            <Form.List name="links">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, idx) => (
                    <Form.Item
                      required={false}
                      key={field.key + socialLinksArr[idx]}
                    >
                      <Subtitle title={socialLinksArr[idx]} />
                      <Form.Item
                        {...field}
                        noStyle
                        name={[field.name, socialLinksArr[idx]]}
                      >
                        <Input placeholder="Enter URL" style={INPUT_STYLE} />
                      </Form.Item>
                      {fields.length >= 1 ? (
                        <MinusCircleOutlined
                          style={{
                            position: "absolute",
                            right: -18,
                            bottom: 18,
                          }}
                          className="dynamic-delete-button"
                          onClick={() => {
                            setSocialLinksArr((prev) => {
                              return prev.filter(
                                (each) => each !== socialLinksArr[idx]
                              );
                            });
                            reax_edit_space_social_settings.deleteSocialItem(
                              socialLinksArr[idx]
                            );
                            remove(field.name);
                          }}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <AddSocialBtn
                      onAdd={(type) => {
                        add();
                        onAddSocialAccount(type);
                      }}
                    />
                  </Form.Item>
                </>
              )}
            </Form.List>
            <footer className={less.lastIntro}>
              To update your settings you should sign message through your
              wallet. Click 'Update profile' then sign the message
            </footer>
            <div className={less.divider}></div>
            <ProfileFooterBtn
              text="Update Profile"
              htmlType="submit"
              onFinish={onFinish}
              loading={reax_edit_profile.editProfileStore.loading}
            />
          </div>
        </Form>
      </div>
    </div>
  );
});

export default EditProfile;
