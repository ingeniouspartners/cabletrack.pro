import { Selector } from 'testcafe';
import {
  ButtonSubmit, PageEditCablePullIn, FieldTugger, FieldTuggerCalibrationID, FieldNotes, FieldPulledHand, FieldLengthInstalled, FieldMaxPullingTension,
} from '../imports/api/testcafe/TestCafe';

class EditCablePullInPage {
  constructor() {
    this.pageId = `#${PageEditCablePullIn}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  async editPullIn(t, pullIn) {
    const lengthInstalledField = `#${FieldLengthInstalled}`;
    const pulledHandField = Selector(`#${FieldPulledHand}`);
    const tuggerField = `#${FieldTugger}`;
    const tuggerCalibrationIDField = `#${FieldTuggerCalibrationID}`;
    const maxPullingTensionField = `#${FieldMaxPullingTension}`;
    const notesField = `#${FieldNotes}`;
    const submitButton = `#${ButtonSubmit} input.btn.btn-primary`;

    await t.click(lengthInstalledField);
    await t.typeText(lengthInstalledField, pullIn.lengthInstalled.toString(), { replace: true });
    if (pullIn.pulledHand) {
      if (await t.expect(pulledHandField.checked).eql(false)) {
        await t.click(pulledHandField);
      }
    } else {
      if (await t.expect(pulledHandField.checked).eql(true)) {
        await t.click(pulledHandField);
      }
      await t.typeText(tuggerField, pullIn.tugger, { replace: true });
      await t.typeText(tuggerCalibrationIDField, pullIn.tuggerCalibrationID, { replace: true });
      await t.click(maxPullingTensionField);
      await t.typeText(maxPullingTensionField, pullIn.maxPullingTension.toString(), { replace: true });
    }
    await t.typeText(notesField, pullIn.notes, { replace: true });
    await t.click(submitButton);
    await t.click('button.swal-button--confirm');
  }
}

export const editCablePullInPage = new EditCablePullInPage();
