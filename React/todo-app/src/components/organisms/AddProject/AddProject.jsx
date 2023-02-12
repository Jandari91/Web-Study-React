import style from "./AddProject.module.css";
import { Label } from "components/atoms";
import Form from "react-bootstrap/Form";
export function AddProject() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Label className={style.label}>이름</Label>
          <Form.Control size="sm" name="title" />
        </Form.Group>
        {
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Label className={style.label}>색상</Label>
            <ColorSelector
              onChanged={changeProjectHook}
              value={project.color}
            />
          </Form.Group>
          /* 
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check custom type="switch" className={css.checkBoxLabel}>
            <Form.Check.Input checked={project.bookmark} />
            <Form.Check.Label
              onClick={(e) => {
                e.target.name = "bookmark";
                changeProjectHook(e);
              }}
            >
              {"즐겨찾기에 추가"}
            </Form.Check.Label>
          </Form.Check>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Label className={css.label}>보기</Label>
          <div className="mb-2">
            <div className={css.radioSection}>
              <ImageCheckBox
                imageUrl={images[0]}
                label={"목록"}
                name={"type"}
                value={project.type}
                onChange={changeProjectHook}
              />
            </div>
            <div className={css.radioSection}>
              <ImageCheckBox
                imageUrl={images[1]}
                label={"보드"}
                name={"type"}
                value={project.type}
                onChange={changeProjectHook}
              />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text className={`${css.comment} text-muted`}>
            보기는 공유 프로젝트에서 팀 멤버들 간에 동기화됩니다.
          </Form.Text>
          <Form.Text className={`${css.commentRed}`}>
            {" "}
            자세히 알아보기
          </Form.Text>
        </Form.Group> */
        }
      </Form>
    </>
  );
}
